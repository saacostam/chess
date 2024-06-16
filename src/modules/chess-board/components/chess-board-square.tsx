import { DragEvent, DragEventHandler } from 'react';
import {
  ChessBoardSquareModel,
  ChessPieceColor,
  ChessPieceType,
  HandleChessBoardSquareOnDrop,
} from '../types';
import {
  BishopIcon,
  KingIcon,
  KnightIcon,
  PawnIcon,
  QueenIcon,
  RookIcon,
} from '../../icons';

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
          className={`w-12 h-12 flex items-center justify-center select-none cursor-grab`}
        >
          {chessBoardSquare.piece.type === ChessPieceType.PAWN ? (
            <PawnIcon color={pieceColor} />
          ) : chessBoardSquare.piece.type === ChessPieceType.ROOK ? (
            <RookIcon color={pieceColor} />
          ) : chessBoardSquare.piece.type === ChessPieceType.KNIGHT ? (
            <KnightIcon color={pieceColor} />
          ) : chessBoardSquare.piece.type === ChessPieceType.QUEEN ? (
            <QueenIcon color={pieceColor} />
          ) : chessBoardSquare.piece.type === ChessPieceType.BISHOP ? (
            <BishopIcon color={pieceColor} />
          ) : chessBoardSquare.piece.type === ChessPieceType.KING ? (
            <KingIcon color={pieceColor} />
          ) : null}
        </div>
      )}
    </div>
  );
};
