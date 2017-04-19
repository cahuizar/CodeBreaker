import { Injectable } from '@angular/core';
import { Frequency } from './frequency';

@Injectable()
export class Singleton {
  private _solution;
  private _text;
  private _frequency: Frequency;

  frequency(): void{
    this._frequency = new Frequency(this._text);
    this._frequency.Frequency();
  }

  set text(text){
    this._text = text;
  }

  get text(){
    return this._text;
  }

  set solution(solution){
    this._solution = solution;
  }

  get solution(){
    return this._solution;
  }

  get single(){
    return this._frequency.single;
  }

  get double(){
    return this._frequency.double;
  }

  get triple(){
    return this._frequency.triple;
  }

}
