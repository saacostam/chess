import { useCallback, useMemo, useState } from 'react';

import { UpdateChessBoard, UpdateChessBoardSquares } from '../types';
import { getCleanChessBoard } from '../utils';

export const useChessBoardClass = () => {
  const [chessBoard, setChessBoard] = useState(getCleanChessBoard());

  const updateChessBoard: UpdateChessBoard = useCallback(
    (setChessBoardDispatch) => setChessBoard(setChessBoardDispatch),
    []
  );

  const updateChessBoardSquares: UpdateChessBoardSquares = useCallback(
    (setChessBoardSquaresState) => {
      setChessBoard((prevState) => {
        const updates = setChessBoardSquaresState(prevState);

        prevState.grid = prevState.grid.map((row) =>
          row.map((square) => {
            const update = updates.find(
              ([chessBoardSquareId]) => chessBoardSquareId === square.id
            );
            if (!update) return square;
            const [, setChessBoardSquare] = update;
            return typeof setChessBoardSquare === 'function'
              ? setChessBoardSquare(square)
              : setChessBoardSquare;
          })
        );

        return {
          ...prevState,
        };
      });
    },
    []
  );

  return useMemo(
    () => ({
      chessBoard,
      updateChessBoard,
      updateChessBoardSquares,
    }),
    [chessBoard, updateChessBoard, updateChessBoardSquares]
  );
};
