import { Injectable } from '@angular/core';
import { Frequency } from './frequency';

@Injectable()
export class Singleton {
  private _solution;
  private _text;
  private _frequency: Frequency;
  private _single;
  private _double;
  private _triple;

  frequency(): void{
    this._frequency = new Frequency(this._text);
    this._frequency.Frequency();
    this._single = this._frequency.single;
    this._double = this._frequency.double;
    this._triple = this._frequency.triple;
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
    return this._single;
  }

  get double(){
    return this._double;
  }

  get triple(){
    return this._triple;
  }

}
