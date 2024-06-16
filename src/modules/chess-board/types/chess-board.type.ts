import { ChessBoardSquareModel } from './chess-board-square.type';

export type ChessBoardGrid = ChessBoardSquareModel[][];

export class ChessBoardModel {
  constructor(public grid: ChessBoardGrid) {}
}
