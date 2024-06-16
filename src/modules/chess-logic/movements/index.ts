import {
  ChessBoardModel,
  ChessBoardSquareModel,
  ChessPiece,
  ChessPieceColor,
  ChessPieceType,
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

  const pieceCanMovePayload: PieceCanMovePayload = {
    chessPiece,
    chessBoard,
    currentSquare,
    objectiveSquare,
  };

  switch (chessPiece.type) {
    case ChessPieceType.PAWN:
      return _pawnCanMove(pieceCanMovePayload);
  }

  return false;
};

interface PieceCanMovePayload {
  chessPiece: ChessPiece;
  chessBoard: ChessBoardModel;
  currentSquare: ChessBoardSquareModel;
  objectiveSquare: ChessBoardSquareModel;
}

export const _pawnCanMove = ({
  chessPiece,
  chessBoard,
  currentSquare,
  objectiveSquare,
}: PieceCanMovePayload): boolean => {
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
    (isSecondRank && LOW <= dy && dy <= HIGH) || (!isSecondRank && dy === ONE)
  );
};
