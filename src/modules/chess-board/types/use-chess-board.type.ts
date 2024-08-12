import { UniqueIdentifier } from '@dnd-kit/core';

export type HandleChessBoardSquareOnDrop = (
  pieceId: UniqueIdentifier,
  objectiveSquareId: UniqueIdentifier
) => void;
