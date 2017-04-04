export class Transpose {

    constructor() {
        let text = "hellomynames";
        this._text = text.split('');
        this._length = this._text.length;
        this._solution = "";
        this._numCols = [];
    }

    CalculateColumns(): void {
        console.log("length: ",this._length, " text: ",this._text);
    }

    get Columns() {
        return this._numCols;
    }

    get Solution() {
        return this._solution;
    }

    private _length: number;
    private _text: string[];
    private _solution: string;
    private _numCols: number[];
}