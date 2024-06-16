import { ChessBoardSquareModel, ChessPieceColor } from "../types"

interface ChessBoardSquareProps{
    color: ChessPieceColor;
    chessBoardSquare: ChessBoardSquareModel;
}

export const ChessBoardSquare = ({
    color,
    chessBoardSquare,
}: ChessBoardSquareProps) => {
    const bgColor = color === ChessPieceColor.WHITE ? 'primary' : 'secondary';

    const pieceColor = chessBoardSquare.piece?.color === ChessPieceColor.WHITE ? 'white' : 'black';
    const pieceText = chessBoardSquare.piece?.color === ChessPieceColor.BLACK ? 'white' : 'black';

    return (
        <div className={`bg-${bgColor} w-20 h-20 flex items-center justify-center`}>
            {
                chessBoardSquare.piece && (
                    <div className={`rounded-full bg-${pieceColor} text-${pieceText} w-12 h-12 flex items-center justify-center`}>
                        {chessBoardSquare.piece.type}
                    </div>
                )
            }
        </div>
    )
}
