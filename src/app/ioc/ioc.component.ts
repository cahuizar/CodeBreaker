import { Component, OnInit } from '@angular/core';
import { Singleton } from '../singleton.service';

@Component({
  selector: 'app-ioc',
  templateUrl: './ioc.component.html',
  styleUrls: ['./ioc.component.css']
})
export class IocComponent {

  constructor(private singleton: Singleton) {
    this._pathText = singleton.text;
    this._pathLength = this._pathText.length;
    this._ioc = 0;
    this._numAlphabets = 0;
    this._single = this.singleton.single;
    this.CalculateIoc();
  }

  CalculateIoc(): void{
    let text = "hellomynameiscarloss";
    let numerator = 0;
    for(let x = 0; x < this._single.length; x++){
      numerator = numerator + (this._single[x].counter * (this._single[x].counter - 1));
    }
    this._ioc = (numerator)/ (this._pathLength * (this._pathLength - 1));
    this._ioc = Math.round(this._ioc * 100000)/100000;
    this.CalculateAlphabets();
  }

  CalculateAlphabets(): void{
    if(this._ioc >= .068){
      this._numAlphabets = 1;
    }
    else if(this._ioc >= .052){
      this._numAlphabets = 2;
    }
    else if(this._ioc >= .047){
      this._numAlphabets = 3;
    }
    else if(this._ioc >= .044){
      this._numAlphabets = 4;
    }
    else if(this._ioc >= .041){
      this._numAlphabets = 10;
    }
    else if(this._ioc >= .038){
      this._numAlphabets = "large";
    }
  }

  private _pathText;
  private _pathLength;
  private _ioc;
  private _numAlphabets;
  private _single;

}
