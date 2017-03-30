import { Injectable } from '@angular/core';

@Injectable()
export class Singleton {
  private _solution;
  private _text;

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

}
