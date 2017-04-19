export class Frequency {
    
    constructor(text){
        text = "hellomynamesiscarlossllmyn";
        this._text = text.split('');
        this._length = this._text.length;
        this._alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        this._alphabetLength = this._alphabet.length;
        this._single = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        this._doubleHolder = [];
        this._doubleCounter = [];
        this._tripleHolder = [];
        this._tripleCounter = [];
        this._double = [];
        this._triple = []
    }

    Frequency(): void {
        for(let x = 0; x < this._length; x++){
            let tempHolder = this._text[x];
            for(let y = 0; y < this._alphabetLength; y++){
                if(tempHolder == this._alphabet[y]){
                    this._single[y] = this._single[y] + 1;
                    this.MultipleFrequency(x);
                    break;
                }
            }
        }
        this.CombineFrequencies();
    }

    MultipleFrequency(x): void {
        if(this._length - x > 1){
           let double = this._text[x]+this._text[x+1]; 
           let notIn = false;
           for(let double_counter = 0; double_counter < this._doubleHolder.length; double_counter++){
               if(double == this._doubleHolder[double_counter]){
                   this._doubleCounter[double_counter] = this._doubleCounter[double_counter] + 1;
                   notIn = true;
                   break;
               }
           }
           if(!notIn){
               this._doubleHolder.push(double);
               this._doubleCounter[this._doubleHolder.length-1] = 1;
           }
        }
        if(this._length - x > 2){
           let triple = this._text[x]+this._text[x+1]+this._text[x+2]; 
           let notIn = false;
           for(let triple_counter = 0; triple_counter < this._tripleHolder.length; triple_counter++){
               if(triple == this._tripleHolder[triple_counter]){
                   this._tripleCounter[triple_counter] = this._tripleCounter[triple_counter] + 1;
                   notIn = true;
                   break;
               }
           }
           if(!notIn){
               this._tripleHolder.push(triple);
               this._tripleCounter[this._tripleHolder.length-1] = 1;
           }
        }
    }

    CombineFrequencies(): void{
        for(let x = 0; x < this._doubleHolder; x++){
            this._double.push({value: this._doubleHolder[x], counter: this._doubleCounter[x]});
        }
        for(let x = 0; x < this._tripleHolder; x++){
            this._triple.push({value: this._tripleHolder[x], counter: this._tripleCounter[x]});
        }
    }

    get single(){
        return this._text;
    }
    
    get double(){
        return this._double;
    }

    get triple(){
        return this._triple;
    }

    private _text;
    private _length: number;
    private _alphabet;
    private _alphabetLength: number;
    private _single;
    private _doubleHolder;
    private _doubleCounter;
    private _tripleHolder;
    private _tripleCounter;
    private _double;
    private _triple;

}
