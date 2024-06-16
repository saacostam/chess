import { useMemo } from "react";
import { useChessBoard } from "../hooks"
import { ChessPieceColor } from "../types";

import { ChessBoardSquare } from "./chess-board-square";
import { getChessBoardForColorSpecificView } from "../utils";

interface ChessBoardProps{
    currentPlayerColor: ChessPieceColor;
}

export const ChessBoard = ({
    currentPlayerColor,
}: ChessBoardProps) => {
    const {
        chessBoard,
    } = useChessBoard();

    const reflectedChessBoardGrid = useMemo(() => getChessBoardForColorSpecificView({
        chessBoardGrid: chessBoard.grid,
        shouldInvert: currentPlayerColor === ChessPieceColor.WHITE,
    }), [chessBoard, currentPlayerColor])

    return (
        <section>
            {
                reflectedChessBoardGrid.map(
                    (chessBoardSquareRow, y) => (
                        <div className="flex w-fit mx-auto bg-primary bg-secondary bg-white bg-black text-white text-black">
                            {
                                chessBoardSquareRow.map(
                                    (chessBoardSquare, x) => (
                                        <ChessBoardSquare
                                            color={y%2 === x%2 ? ChessPieceColor.WHITE : ChessPieceColor.BLACK}
                                            chessBoardSquare={chessBoardSquare}
                                        />
                                    )
                                )
                            }
                        </div>
                    )
                )
            }
        </section>
    )
}
