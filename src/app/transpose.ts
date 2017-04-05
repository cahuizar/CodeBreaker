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
        this.TransposeColumns();
    }

    TransposeColumns(): void {
        // change them to contain the value selected from dropdown.
        let column = 4;
        let numOfIncrements = 3;
        let solution = [];
        let keepGoing = true;
        let counter = numOfIncrements;
        let lowerBounds = 0;
        let upperBounds = this._length;

        solution.push(this._text[lowerBounds]);
        while(keepGoing){
            console.log("IN");
            if(solution.length == this._length){
                console.log("FUll");
                keepGoing = false;
            }
            else if(counter+1 > upperBounds){
                counter = (counter+1) - upperBounds;
                solution.push(this._text[counter]);
                console.log("Here is the current solution: ",solution)
            }
            else{
                console.log("counter: ", counter, "value:", this._text[counter]);
                solution.push(this._text[counter]);
            }
            counter += numOfIncrements;
        }
        console.log(solution);
    }

    get Columns() {
        return this._numCols;
    }

    get Solution(): string {
        return this._solution;
    }

    private _length: number;
    private _text: string[];
    private _solution: string;
    private _numCols = [];
    private _matrix = [];
}