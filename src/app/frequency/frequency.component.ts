import { Component, OnInit } from '@angular/core';
import { Singleton } from '../singleton.service';

@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrls: ['./frequency.component.css']
})
export class FrequencyComponent implements OnInit {

  constructor(private singleton: Singleton){
    this._single = this.singleton.single;
    this._double = this.singleton.double;
    this._triple = this.singleton.triple;
  }

  ngOnInit() {
  }

  private _single;
  private _double;
  private _triple;

}
