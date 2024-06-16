import {
  ChessBoardModel,
  ChessBoardSquareModel,
  ChessPiece,
  ChessPieceColor,
  ChessPieceType,
  isWithinLimits,
  PawnChessPiece,
  RookChessPiece,
} from '../../chess-board';
import { Vector } from '../../physics';

export interface CanMoveOptions {
  chessPiece: ChessPiece;
  chessBoard: ChessBoardModel;
  currentPosition: Vector;
  objectivePosition: Vector;
}

export const canMove = ({
  chessPiece,
  chessBoard,
  currentPosition,
  objectivePosition,
}: CanMoveOptions): boolean => {
  const currentSquare = chessBoard.grid[currentPosition.y][currentPosition.x];

  if (currentSquare.piece !== chessPiece) return false;

  const objectiveSquare =
    chessBoard.grid[objectivePosition.y][objectivePosition.x];

  const pieceCanMovePayload: Omit<PieceCanMovePayload, 'chessPiece'> = {
    chessBoard,
    currentSquare,
    objectiveSquare,
  };

  switch (chessPiece.type) {
    case ChessPieceType.PAWN:
      return _pawnCanMove({
        ...pieceCanMovePayload,
        chessPiece: chessPiece,
      });
    case ChessPieceType.ROW:
      return _rookCanMove({
        ...pieceCanMovePayload,
        chessPiece: chessPiece,
      });
  }

  return false;
};

interface PieceCanMovePayload<T = ChessPiece> {
  chessPiece: T;
  chessBoard: ChessBoardModel;
  currentSquare: ChessBoardSquareModel;
  objectiveSquare: ChessBoardSquareModel;
}

export const _pawnCanMove = ({
  chessPiece,
  chessBoard,
  currentSquare,
  objectiveSquare,
}: PieceCanMovePayload<PawnChessPiece>): boolean => {
  const dx = objectiveSquare.position.x - currentSquare.position.x;
  const dy = objectiveSquare.position.y - currentSquare.position.y;

  if (dx !== 0) return false;

  const isSecondRank =
    chessPiece.color === ChessPieceColor.BLACK
      ? currentSquare.position.y === chessBoard.grid.length - 2
      : currentSquare.position.y === 1;

  const LOW = chessPiece.color === ChessPieceColor.BLACK ? -2 : 1;
  const HIGH = chessPiece.color === ChessPieceColor.BLACK ? -1 : 2;

  const ONE = chessPiece.color === ChessPieceColor.BLACK ? -1 : 1;

  return (
    (isSecondRank &&
      LOW <= dy &&
      dy <= HIGH &&
      !chessBoard.grid[currentSquare.position.y + ONE][currentSquare.position.x]
        .piece) ||
    (!isSecondRank && dy === ONE)
  );
};

export const _rookCanMove = ({
  chessPiece: _,
  chessBoard,
  currentSquare,
  objectiveSquare,
}: PieceCanMovePayload<RookChessPiece>): boolean => {
  let dx = objectiveSquare.position.x - currentSquare.position.x;
  let dy = objectiveSquare.position.y - currentSquare.position.y;

  if ((dx === 0 && dy === 0) || (dx !== 0 && dy !== 0)) return false;

  dx = dx === 0 ? 0 : dx / Math.abs(dx);
  dy = dy === 0 ? 0 : dy / Math.abs(dy);

  const position = new Vector(
    currentSquare.position.x + dx,
    currentSquare.position.y + dy
  );

  while (isWithinLimits(chessBoard, position)) {
    const currSquare = chessBoard.grid[position.y][position.x];

    if (objectiveSquare.position.isEqual(position)) return true;
    if (currSquare.piece) return false;

    position.x += dx;
    position.y += dy;
  }

  return false;
};
