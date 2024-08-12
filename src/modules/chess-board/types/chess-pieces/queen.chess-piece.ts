import { v4 as uuid } from 'uuid';

import { ChessPieceColor, ChessPieceType, IChessPiece, PieceCanMove } from '.';
import { isWithinLimits } from '../../utils';
import { Vector } from '../../../physics';

interface QueenChessPieceOptions {
  color: ChessPieceColor;
}

export class QueenChessPiece implements IChessPiece {
  public id = uuid();
  public type: ChessPieceType = ChessPieceType.QUEEN;
  public color: ChessPieceColor;

  constructor({ color }: QueenChessPieceOptions) {
    this.color = color;
  }

  canMove({
    chessBoard,
    currentSquare,
    objectiveSquare,
  }: PieceCanMove<QueenChessPiece>): boolean {
    let dx = objectiveSquare.position.x - currentSquare.position.x;
    let dy = objectiveSquare.position.y - currentSquare.position.y;

    const isOrthogonal = !((dx === 0 && dy === 0) || (dx !== 0 && dy !== 0));
    const isDiagonal = !(Math.abs(dx) !== Math.abs(dy));

    if (!isOrthogonal && !isDiagonal) return false;

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
