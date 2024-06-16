import { useCallback, useMemo } from 'react';

import { findPieceById, findSquareById } from '../utils';
import { HandleChessBoardSquareOnDrop } from '../types';
import { useChessBoardClass } from './use-chess-board-class';

export const useChessBoard = () => {
  const {
    chessBoard,
    updateChessBoardSquares,
  } = useChessBoardClass();

  const handleChessBoardSquareOnDrop: HandleChessBoardSquareOnDrop =
    useCallback((pieceId, currSquareId, objectiveSquareId) => {
      updateChessBoardSquares((chessBoard) => {
        const piece = findPieceById(chessBoard, pieceId);

        const currSquare = findSquareById(chessBoard, currSquareId);
        const objectiveSquare = findSquareById(chessBoard, objectiveSquareId);

        if (!piece || !currSquare || !objectiveSquare || objectiveSquare.piece) return [];

        return [
          [currSquare.id, (currSquare) => ({
            ...currSquare,
            piece: undefined,
          })],
          [objectiveSquare.id, (objectiveSquare) => ({
            ...objectiveSquare,
            piece: piece,
          })]
        ]});
      }
    , [updateChessBoardSquares]);

  return useMemo(
    () => ({
      chessBoard,
      handleChessBoardSquareOnDrop,
    }),
    [chessBoard, handleChessBoardSquareOnDrop]
  );
};
