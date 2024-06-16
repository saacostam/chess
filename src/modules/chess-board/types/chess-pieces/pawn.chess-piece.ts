import { ChessPieceColor, ChessPieceType, IChessPiece } from '.';

interface PawnChessPieceOptions{
    color: ChessPieceColor;
}

export class PawnChessPiece implements IChessPiece{
    public type: ChessPieceType = ChessPieceType.PAWN;
    public color: ChessPieceColor;

    constructor({
        color,
    }: PawnChessPieceOptions){
        this.color = color;
    }
}
