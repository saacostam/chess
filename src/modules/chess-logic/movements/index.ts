import { ChessBoardModel, ChessPiece, PieceCanMove } from '../../chess-board';
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

  const pieceCanMovePayload: Omit<PieceCanMove, 'chessPiece'> = {
    chessBoard,
    currentSquare,
    objectiveSquare,
  };

  return chessPiece.canMove({
    ...pieceCanMovePayload,
    chessPiece: chessPiece,
  });
};
