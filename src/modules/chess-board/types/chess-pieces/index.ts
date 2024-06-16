export * from './pawn.chess-piece';
export * from './rook.chess-piece';

import { PawnChessPiece } from './pawn.chess-piece';
import { RookChessPiece } from './rook.chess-piece';

export enum ChessPieceType {
  PAWN = 'Pawn',
  ROW = 'Row',
  KNIGHT = 'Knight',
  BISHOP = 'Bishop',
  QUEEN = 'Queen',
  KING = 'King',
}

export enum ChessPieceColor {
  WHITE = 'White',
  BLACK = 'Black',
}

export interface IChessPiece {
  id: string;
  type: ChessPieceType;
  color: ChessPieceColor;
}

export type ChessPiece = PawnChessPiece | RookChessPiece;
