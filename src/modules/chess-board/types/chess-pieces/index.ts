export * from './pawn.chess-piece';
export * from './rook.chess-piece';

import { ChessBoardModel } from '../chess-board.type';
import { PawnChessPiece } from './pawn.chess-piece';
import { RookChessPiece } from './rook.chess-piece';
import { ChessBoardSquareModel } from '../chess-board-square.type';

export enum ChessPieceType {
  PAWN = 'Pawn',
  ROOK = 'Row',
  KNIGHT = 'Knight',
  BISHOP = 'Bishop',
  QUEEN = 'Queen',
  KING = 'King',
}

export enum ChessPieceColor {
  WHITE = 'White',
  BLACK = 'Black',
}

export interface PieceCanMove<T = ChessPiece> {
  chessPiece: T;
  chessBoard: ChessBoardModel;
  currentSquare: ChessBoardSquareModel;
  objectiveSquare: ChessBoardSquareModel;
}

export interface IChessPiece {
  id: string;
  type: ChessPieceType;
  color: ChessPieceColor;
  canMove: (options: PieceCanMove<IChessPiece>) => boolean;
}

export type ChessPiece = PawnChessPiece | RookChessPiece;
