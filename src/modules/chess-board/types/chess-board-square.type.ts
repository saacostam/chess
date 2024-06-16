import { Vector } from "src/modules/physics";
import { ChessPiece } from "./chess-pieces";

interface ChessBoardSquareOptions{
    position: Vector;
    piece?: ChessPiece;
}

export class ChessBoardSquareModel{
    position: Vector;
    piece?: ChessPiece;

    constructor({
        position,
        piece,
    }: ChessBoardSquareOptions){
        this.position = position;
        this.piece = piece;
    }
}
