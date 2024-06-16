import { v4 as uuid } from 'uuid';
import { ChessPieceColor, ChessPieceType, IChessPiece } from ".";

interface RowChessPieceOptions{
    color: ChessPieceColor;
}

export class RowChessPiece implements IChessPiece{
    public id = uuid();
    public type: ChessPieceType = ChessPieceType.ROW;
    public color: ChessPieceColor;

    constructor({
        color,
    }: RowChessPieceOptions){
        this.color = color;
    }
}
