export class Anagram {
    constructor(){
        let text = "hellomynames";
        this._text = text.split('');
        this._length = this._text.length;
        this._solution = "";
        this.CalculateAnagram();
    }

    CalculateColumns(): void {
        for(let i = 2; i <= 10; i++) {
            if(this._length%i == 0){
                let col = this._length/i;
                this._numCols.push({value: i, viewValue: i});
            }
        }
    }

    CalculateAnagram(): void {
        // replace with actual column received from user.
        let column = 4;
        // rember to subratrct one from each column
        let colOrder = [4,1,3,2];

        let numIterations = this._length/column;
        let upperBounds = column;
        let counter = 0;
        for(let x = 0; x < numIterations; x++){
            let tempText = [];
            for(; counter < upperBounds; counter++){
                tempText.push(this._text[counter]);
            }
            console.log("Text so far: ", tempText, " counter: ", counter, "upperBounds: ", upperBounds);
            this.ReOrganizeColumns(tempText, colOrder);
            console.log("Temp Solution so far: ", this._tempSolution);
            upperBounds += column;
        }
        
    }

    ReOrganizeColumns(tempText, colOrder): void {
        for(let i = 0; i < 4; i++){
            console.log("TempText re ordered value: ", tempText[colOrder[i]-1]);
            this._tempSolution.push(tempText[colOrder[i]]);
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
