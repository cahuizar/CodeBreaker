export class Anagram {
    constructor(text){
        this._text = text.split('');
        this._length = this._text.length;
        this._solution = "";
    }

    CalculateColumns(): void {
        for(let i = 2; i <= 10; i++) {
            if(this._length%i == 0){
                let col = this._length/i;
                this._numCols.push({value: i, viewValue: i});
            }
        }
    }

    CalculateAnagram(column, colOrder): void {
        let numIterations = this._length/column;
        let upperBounds = column;
        let counter = 0;
        for(let x = 0; x < numIterations; x++){
            let tempText = [];
            for(; counter < upperBounds; counter++){
                tempText.push(this._text[counter]);
            }
            this.ReOrganizeColumns(tempText, colOrder, column);
            upperBounds += column;
        }
        this._solution = this._tempSolution.join("");

    }

    ReOrganizeColumns(tempText, colOrder, column): void {
        for(let i = 0; i < column; i++){
            this._tempSolution.push(tempText[colOrder[i]-1]);
        }
    }

    get Solution(): string{
        return this._solution;
    }

    get Columns(){
        return this._numCols;
    }

    private _text;
    private _length;
    private _solution: string;
    private _tempSolution = [];
    private _numCols = [];
}
