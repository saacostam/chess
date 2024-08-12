import { Vector } from '../../physics';

import { CHESS_BOARD_CONFIG } from '../constants';
import {
  BishopChessPiece,
  ChessBoardGrid,
  ChessBoardModel,
  ChessBoardSquareModel,
  ChessPiece,
  ChessPieceColor,
  KingChessPiece,
  KnightChessPiece,
  PawnChessPiece,
  QueenChessPiece,
  RookChessPiece,
} from '../types';
import { UniqueIdentifier } from '@dnd-kit/core';

export const getCleanChessBoard = (): ChessBoardModel => {
  const grid: ChessBoardSquareModel[][] = [];

  for (let y = 0; y < CHESS_BOARD_CONFIG.HEIGHT; y++) {
    const row: ChessBoardSquareModel[] = [];

    for (let x = 0; x < CHESS_BOARD_CONFIG.WIDTH; x++) {
      const position = new Vector(x, y);

      const piece: ChessPiece | undefined = _getChessPieceByPosition(position);

      row.push(
        new ChessBoardSquareModel({
          position: position,
          piece: piece,
        })
      );
    }

    grid.push(row);
  }

  return new ChessBoardModel(grid);
};

export const _getChessPieceByPosition = (
  position: Vector
): ChessPiece | undefined => {
  const { WIDTH, HEIGHT } = CHESS_BOARD_CONFIG;

  let chessPiece: ChessPiece | undefined = undefined;

  const isWhiteBackRow = position.y === 0;
  const isWhitePawnRow = position.y === 1;

  const isBlackBackRow = position.y === HEIGHT - 1;
  const isBlackPawnRow = position.y === HEIGHT - 2;

  if (isWhiteBackRow) {
    if (position.x === 0 || position.x === WIDTH - 1)
      chessPiece = new RookChessPiece({
        color: ChessPieceColor.WHITE,
      });
    else if (position.x === 1 || position.x === WIDTH - 2)
      chessPiece = new KnightChessPiece({
        color: ChessPieceColor.WHITE,
      });
    else if (position.x === 2 || position.x === WIDTH - 3)
      chessPiece = new BishopChessPiece({
        color: ChessPieceColor.WHITE,
      });
    else if (position.x === 3)
      chessPiece = new QueenChessPiece({
        color: ChessPieceColor.WHITE,
      });
    else if (position.x === 4)
      chessPiece = new KingChessPiece({
        color: ChessPieceColor.WHITE,
      });
  } else if (isWhitePawnRow) {
    chessPiece = new PawnChessPiece({
      color: ChessPieceColor.WHITE,
    });
  } else if (isBlackBackRow) {
    if (position.x === 0 || position.x === WIDTH - 1)
      chessPiece = new RookChessPiece({
        color: ChessPieceColor.BLACK,
      });
    else if (position.x === 1 || position.x === WIDTH - 2)
      chessPiece = new KnightChessPiece({
        color: ChessPieceColor.BLACK,
      });
    else if (position.x === 2 || position.x === WIDTH - 3)
      chessPiece = new BishopChessPiece({
        color: ChessPieceColor.BLACK,
      });
    else if (position.x === 3)
      chessPiece = new QueenChessPiece({
        color: ChessPieceColor.BLACK,
      });
    else if (position.x === 4)
      chessPiece = new KingChessPiece({
        color: ChessPieceColor.BLACK,
      });
  } else if (isBlackPawnRow) {
    chessPiece = new PawnChessPiece({
      color: ChessPieceColor.BLACK,
    });
  }

  return chessPiece;
};

export const getChessBoardForColorSpecificView = (options: {
  chessBoardGrid: ChessBoardGrid;
  shouldInvert: boolean;
}): ChessBoardGrid => {
  const { chessBoardGrid, shouldInvert } = options;

  const reflectedChessBoardGrid = chessBoardGrid.map((row) =>
    row.map((piece) => piece)
  );

  if (shouldInvert) {
    for (let i = 0; i < reflectedChessBoardGrid.length; i++) {
      for (let j = 0; j < reflectedChessBoardGrid[i].length; j++) {
        const mi = reflectedChessBoardGrid.length - 1 - i;
        const mj = reflectedChessBoardGrid[i].length - 1 - j;

        reflectedChessBoardGrid[i][j] = chessBoardGrid[mi][mj];
      }
    }
  }

  return reflectedChessBoardGrid;
};

export const findPieceById = (
  chessBoard: ChessBoardModel,
  pieceId: UniqueIdentifier
): ChessPiece | undefined => {
  const { grid } = chessBoard;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const { piece } = grid[i][j];
      if (!piece) continue;

      if (piece.id === pieceId) return piece;
    }
  }
};

export const findSquareById = (
  chessBoard: ChessBoardModel,
  squareId: UniqueIdentifier
): ChessBoardSquareModel | undefined => {
  const { grid } = chessBoard;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j].id === squareId) return grid[i][j];
    }
  }
};

export const findSquareByPieceId = (
  chessBoard: ChessBoardModel,
  pieceId: UniqueIdentifier
): ChessBoardSquareModel | undefined => {
  const { grid } = chessBoard;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j].piece?.id === pieceId) return grid[i][j];
    }
  }
};

export const isWithinLimits = (
  chessBoard: ChessBoardModel,
  position: Vector
): boolean =>
  0 <= position.x &&
  position.x < chessBoard.grid.length &&
  0 <= position.y &&
  position.y < chessBoard.grid[0].length;
