export class Transpose {

    constructor(pathText) {
        let text = pathText;
        this._text = text.split('');
        this._length = this._text.length;
        this._solution = "";
        this._numCols = [];
    }

    CalculateColumns(): void {
        for(let i = 2; i <= 10; i++) {
            if(this._length%i == 0){
                let col = this._length/i;
                this._numCols.push({value: i, viewValue: i});
            }
        }
    }

    TransposeColumns(column): void {
        let numOfIncrements = this._length/column;
        let solution = [];
        let keepGoing = true;
        let counter = numOfIncrements;
        solution.push(this._text[0]);
        while(keepGoing){
            if(solution.length == this._length){
                keepGoing = false;
            }
            else if(counter+1 > this._length){
                counter = (counter+1) - this._length;
                solution.push(this._text[counter]);
            }
            else{
                solution.push(this._text[counter]);
            }
            counter += numOfIncrements;
        }
        console.log(solution);
        this._solution = solution.join("");
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
}