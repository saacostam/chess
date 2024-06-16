export class Vector{
    constructor(public x: number, public y: number){};

    public clone(): Vector{
        return new Vector(this.x, this.y);
    }
}
