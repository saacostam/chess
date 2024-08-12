import { v4 as uuid } from 'uuid';

import { Vector } from '../../physics';
import { ChessPiece } from './chess-pieces';

interface ChessBoardSquareOptions {
  position: Vector;
  piece?: ChessPiece;
}

export class ChessBoardSquareModel {
  public id: string = uuid();
  public position: Vector;
  public piece?: ChessPiece;

  constructor({ position, piece }: ChessBoardSquareOptions) {
    this.position = position;
    this.piece = piece;
  }
}
