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
        for(let i = 2; i <= 10; i++) {
            if(this._length%i == 0){
                let col = this._length/i;
                this._numCols.push(i);
                this._numCols.push({value: i, viewValue: i});
                this._matrix.push({row: i, column: col});
            }
        }
        console.log("Possible columns: ", this._numCols);
    }

    TransposeColumns(): void {
        let column = 4;
        
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
    private _numCols = [];
    private _matrix = [];
}