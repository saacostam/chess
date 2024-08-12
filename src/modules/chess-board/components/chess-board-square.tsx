import { useDraggable, useDroppable } from '@dnd-kit/core';
import {
  ChessBoardSquareModel,
  ChessPiece,
  ChessPieceColor,
  ChessPieceType,
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
}

export const ChessBoardSquare = ({
  color,
  chessBoardSquare,
}: ChessBoardSquareProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: chessBoardSquare.id,
  });

  const bgColor = isOver
    ? 'white'
    : color === ChessPieceColor.WHITE
      ? 'primary'
      : 'secondary';

  return (
    <div
      className={`bg-${bgColor} w-20 h-20 flex items-center justify-center`}
      ref={setNodeRef}
    >
      {chessBoardSquare.piece && (
        <ChessPieceComp chessPiece={chessBoardSquare.piece} />
      )}
    </div>
  );
};

export interface ChessPieceProps {
  chessPiece: ChessPiece;
}

export function ChessPieceComp({ chessPiece }: ChessPieceProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: chessPiece.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const pieceColor =
    chessPiece?.color === ChessPieceColor.WHITE ? 'white' : 'black';

  return (
    <div
      className={`w-12 h-12 flex items-center justify-center select-none cursor-grab`}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {chessPiece.type === ChessPieceType.PAWN ? (
        <PawnIcon color={pieceColor} />
      ) : chessPiece.type === ChessPieceType.ROOK ? (
        <RookIcon color={pieceColor} />
      ) : chessPiece.type === ChessPieceType.KNIGHT ? (
        <KnightIcon color={pieceColor} />
      ) : chessPiece.type === ChessPieceType.QUEEN ? (
        <QueenIcon color={pieceColor} />
      ) : chessPiece.type === ChessPieceType.BISHOP ? (
        <BishopIcon color={pieceColor} />
      ) : chessPiece.type === ChessPieceType.KING ? (
        <KingIcon color={pieceColor} />
      ) : null}
    </div>
  );
}
