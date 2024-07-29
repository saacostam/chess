import { useCallback, useMemo } from 'react';

import { findPieceById, findSquareById, findSquareByPieceId } from '../utils';
import { HandleChessBoardSquareOnDrop } from '../types';
import { useChessBoardClass } from './use-chess-board-class';
import { canMove } from '../../chess-logic';

export const useChessBoard = () => {
  const { chessBoard, updateChessBoardSquares } = useChessBoardClass();

  const handleChessBoardSquareOnDrop: HandleChessBoardSquareOnDrop =
    useCallback(
      (pieceId, objectiveSquareId) => {
        updateChessBoardSquares((chessBoard) => {
          const piece = findPieceById(chessBoard, pieceId);

          const currSquare = findSquareByPieceId(chessBoard, pieceId);
          const objectiveSquare = findSquareById(chessBoard, objectiveSquareId);

          if (
            !piece ||
            !currSquare ||
            !objectiveSquare ||
            objectiveSquare.piece
          )
            return [];

          if (
            canMove({
              chessPiece: piece,
              chessBoard: chessBoard,
              currentPosition: currSquare.position,
              objectivePosition: objectiveSquare.position,
            })
          ) {
            return [
              [
                currSquare.id,
                (currSquare) => ({
                  ...currSquare,
                  piece: undefined,
                }),
              ],
              [
                objectiveSquare.id,
                (objectiveSquare) => ({
                  ...objectiveSquare,
                  piece: piece,
                }),
              ],
            ];
          }

          return [];
        });
      },
      [updateChessBoardSquares]
    );

  return useMemo(
    () => ({
      chessBoard,
      handleChessBoardSquareOnDrop,
    }),
    [chessBoard, handleChessBoardSquareOnDrop]
  );
};
