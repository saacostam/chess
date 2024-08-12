import { v4 as uuid } from 'uuid';

import { ChessPieceColor, ChessPieceType, IChessPiece, PieceCanMove } from '.';

interface KnightChessPieceOptions {
  color: ChessPieceColor;
}

export class KnightChessPiece implements IChessPiece {
  public id = uuid();
  public type: ChessPieceType = ChessPieceType.KNIGHT;
  public color: ChessPieceColor;

  constructor({ color }: KnightChessPieceOptions) {
    this.color = color;
  }

  canMove({
    currentSquare,
    objectiveSquare,
  }: PieceCanMove<KnightChessPiece>): boolean {
    const dx = objectiveSquare.position.x - currentSquare.position.x;
    const dy = objectiveSquare.position.y - currentSquare.position.y;

    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
  }
}
