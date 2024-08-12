import { ChessBoard, ChessPieceColor } from './modules/chess-board';

function App() {
  return (
    <>
      <h1 className='text-4xl text-accent font-bold my-8 text-center'>Chess | saacostam</h1>
      <ChessBoard currentPlayerColor={ChessPieceColor.WHITE} />
    </>
  );
}

export default App;
