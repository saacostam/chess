import { useMemo } from 'react';
import { useChessBoard } from '../hooks';
import { ChessPieceColor } from '../types';

import { ChessBoardSquare } from './chess-board-square';
import { getChessBoardForColorSpecificView } from '../utils';
import { DndContext } from '@dnd-kit/core';

interface ChessBoardProps {
  currentPlayerColor: ChessPieceColor;
}

export const ChessBoard = ({ currentPlayerColor }: ChessBoardProps) => {
  const { chessBoard, handleChessBoardSquareOnDrop } = useChessBoard();

  const reflectedChessBoardGrid = useMemo(
    () =>
      getChessBoardForColorSpecificView({
        chessBoardGrid: chessBoard.grid,
        shouldInvert: currentPlayerColor === ChessPieceColor.WHITE,
      }),
    [chessBoard, currentPlayerColor]
  );

  return (
    <DndContext
      onDragEnd={({ active, over }) =>
        handleChessBoardSquareOnDrop(active.id, over?.id || '')
      }
    >
      {reflectedChessBoardGrid.map((chessBoardSquareRow, y) => (
        <div
          className="flex w-fit mx-auto bg-primary bg-secondary bg-white bg-black text-white text-black"
          key={y}
        >
          {chessBoardSquareRow.map((chessBoardSquare, x) => (
            <ChessBoardSquare
              key={x}
              color={
                y % 2 === x % 2 ? ChessPieceColor.WHITE : ChessPieceColor.BLACK
              }
              chessBoardSquare={chessBoardSquare}
            />
          ))}
        </div>
      ))}
    </DndContext>
  );
};
