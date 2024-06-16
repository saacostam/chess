'use client';

import { ChessBoard, ChessPieceColor } from 'src/modules/chess-board';

export default function Index() {
  return (
    <div>
      <h3 className="text-4xl text-center my-4">Chess</h3>
      <ChessBoard currentPlayerColor={ChessPieceColor.WHITE} />
    </div>
  );
}
