import { Color, Coords, FENChar } from "../models";

export  class Bishop extends Piece{
    protected override _FENChar: FENChar = "P";
    protected override _directions : Coords[];

    constructor(private _color:Color){}

        public get FENChar(): FENChar{
            return this._FENChar; 
        }

        public get directions():Coords[]{
            return this._directions;
        }

        public get color ():Color{
            return this._color;
        }
    
}