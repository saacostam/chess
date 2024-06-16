import { v4 as uuid } from 'uuid';

import { ChessPieceColor, ChessPieceType, IChessPiece, PieceCanMove } from '.';
import { isWithinLimits } from '../../utils';
import { Vector } from '../../../physics';

interface BishopChessPieceOptions {
  color: ChessPieceColor;
}

export class BishopChessPiece implements IChessPiece {
  public id = uuid();
  public type: ChessPieceType = ChessPieceType.BISHOP;
  public color: ChessPieceColor;

  constructor({ color }: BishopChessPieceOptions) {
    this.color = color;
  }

  canMove({
    chessBoard,
    currentSquare,
    objectiveSquare,
  }: PieceCanMove<BishopChessPiece>): boolean {
    let dx = objectiveSquare.position.x - currentSquare.position.x;
    let dy = objectiveSquare.position.y - currentSquare.position.y;

    if (Math.abs(dx) !== Math.abs(dy)) return false;

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
  }
}
