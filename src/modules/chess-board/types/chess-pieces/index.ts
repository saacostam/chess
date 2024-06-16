export * from './pawn.chess-piece';
export * from './row.chess-piece';

import { PawnChessPiece } from "./pawn.chess-piece";
import { RowChessPiece } from "./row.chess-piece";

export enum ChessPieceType{
    PAWN = 'Pawn',
    ROW = 'Row',
    KNIGHT = 'Knight',
    BISHOP = 'Bishop',
    QUEEN = 'Queen',
    KING = 'King',
}

export enum ChessPieceColor{
    WHITE = 'White',
    BLACK = 'Black',
}

export interface IChessPiece{
    type: ChessPieceType;
    color: ChessPieceColor;
}

export type ChessPiece = |
    PawnChessPiece |
    RowChessPiece