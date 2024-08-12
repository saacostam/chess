import { v4 as uuid } from 'uuid';
import { ChessPieceColor, ChessPieceType, IChessPiece, PieceCanMove } from '.';

interface KingChessPieceOptions {
  color: ChessPieceColor;
}

export class KingChessPiece implements IChessPiece {
  public id = uuid();
  public type: ChessPieceType = ChessPieceType.KING;
  public color: ChessPieceColor;

  constructor({ color }: KingChessPieceOptions) {
    this.color = color;
  }

  canMove({
    currentSquare,
    objectiveSquare,
  }: PieceCanMove<KingChessPiece>): boolean {
    const dx = objectiveSquare.position.x - currentSquare.position.x;
    const dy = objectiveSquare.position.y - currentSquare.position.y;

    return (
      !(dx === 0 && dy === 0) &&
      0 <= Math.abs(dx) &&
      Math.abs(dx) <= 1 &&
      0 <= Math.abs(dy) &&
      Math.abs(dy) <= 1
    );
  }
}
