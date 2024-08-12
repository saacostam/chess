import { ChessBoard, ChessPieceColor } from './modules/chess-board';

function App() {
  return (
    <>
      <ChessBoard currentPlayerColor={ChessPieceColor.WHITE} />
    </>
  );
}

export default App;
