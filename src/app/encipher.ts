export class Encipher{
    _text: string[];

    setText(text : string[]): void{
        console.log("Called");
    }
    getText(): string[]{
        return this._text;
    }
}
