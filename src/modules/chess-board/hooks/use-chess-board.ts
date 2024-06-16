import { useMemo, useState } from "react"

import { getCleanChessBoard } from "../utils";

export const useChessBoard = () => {
    const [chessBoard] = useState(getCleanChessBoard());

    return useMemo(() => ({
        chessBoard,
    }), [
        chessBoard,
    ]);
}
