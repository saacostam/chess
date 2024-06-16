import { v4 as uuid } from 'uuid';
import { ChessPieceColor, ChessPieceType, IChessPiece, PieceCanMove } from '.';

interface PawnChessPieceOptions {
  color: ChessPieceColor;
}

export class PawnChessPiece implements IChessPiece {
  public id = uuid();
  public type: ChessPieceType = ChessPieceType.PAWN;
  public color: ChessPieceColor;

  constructor({ color }: PawnChessPieceOptions) {
    this.color = color;
  }

  canMove({
    chessPiece,
    chessBoard,
    currentSquare,
    objectiveSquare,
  }: PieceCanMove<PawnChessPiece>): boolean {
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
        !chessBoard.grid[currentSquare.position.y + ONE][
          currentSquare.position.x
        ].piece) ||
      (!isSecondRank && dy === ONE)
    );
  }
}
