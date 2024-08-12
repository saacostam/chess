import { SetStateAction } from 'react';

import { ChessBoardSquareModel } from './chess-board-square.type';
import { ChessBoardModel } from './chess-board.type';

export type UpdateChessBoardSquares = (
  setChessBoardSquaresState: (
    chessBoard: ChessBoardModel
  ) => [
    chessBoardSquareId: string,
    setChessBoardSquare: SetStateAction<ChessBoardSquareModel>,
  ][]
) => void;

export type UpdateChessBoard = (
  setChessBoard: SetStateAction<ChessBoardModel>
) => void;
