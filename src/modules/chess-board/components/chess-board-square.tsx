import { DragEvent, DragEventHandler } from 'react';
import {
  ChessBoardSquareModel,
  ChessPieceColor,
  HandleChessBoardSquareOnDrop,
} from '../types';

interface ChessBoardSquareProps {
  color: ChessPieceColor;
  chessBoardSquare: ChessBoardSquareModel;
  handleChessBoardSquareOnDrop: HandleChessBoardSquareOnDrop;
}

enum DataTransferKey {
  PIECE_ID = 'Piece Id',
  CURR_SQUARE_ID = 'Current Square Id',
}

export const ChessBoardSquare = ({
  color,
  chessBoardSquare,
  handleChessBoardSquareOnDrop,
}: ChessBoardSquareProps) => {
  const bgColor = color === ChessPieceColor.WHITE ? 'primary' : 'secondary';
  const pieceColor =
    chessBoardSquare.piece?.color === ChessPieceColor.WHITE ? 'white' : 'black';
  const pieceText =
    chessBoardSquare.piece?.color === ChessPieceColor.BLACK ? 'white' : 'black';

  const preventDefaultHandler: DragEventHandler = (e) => e.preventDefault();
  const onChessPieceDragStart: DragEventHandler<HTMLDivElement> = (e) => {
    e.dataTransfer.setData(
      DataTransferKey.PIECE_ID,
      chessBoardSquare.piece?.id || ''
    );
    e.dataTransfer.setData(
      DataTransferKey.CURR_SQUARE_ID,
      chessBoardSquare.id || ''
    );
  };
  const onChessBoardSquareDrop = (
    e: DragEvent,
    chessBoardSquare: ChessBoardSquareModel
  ) => {
    const pieceId = e.nativeEvent.dataTransfer?.getData(
      DataTransferKey.PIECE_ID
    );
    const currSquareId = e.nativeEvent.dataTransfer?.getData(
      DataTransferKey.CURR_SQUARE_ID
    );
    if (!pieceId || !currSquareId) return;
    handleChessBoardSquareOnDrop(pieceId, currSquareId, chessBoardSquare.id);
  };

  return (
    <div
      onDrop={(e) => onChessBoardSquareDrop(e, chessBoardSquare)}
      onDragOver={preventDefaultHandler}
      onDragEnter={preventDefaultHandler}
      className={`bg-${bgColor} w-20 h-20 flex items-center justify-center`}
    >
      {chessBoardSquare.piece && (
        <div
          draggable="true"
          onDragStart={onChessPieceDragStart}
          className={`bg-${pieceColor} text-${pieceText} w-12 h-12 flex items-center justify-center select-none cursor-grab`}
        >
          {chessBoardSquare.piece.type}
        </div>
      )}
    </div>
  );
};
