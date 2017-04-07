import { Component, OnInit } from '@angular/core';
import { CaesarShift } from '../caesar-shift';
import { Singleton } from '../singleton.service';

@Component({
  selector: 'app-caesar-decrypt',
  templateUrl: './caesar-decrypt.component.html',
  styleUrls: ['./caesar-decrypt.component.css']
})
export class CaesarDecryptComponent implements OnInit {
  resultsColumns = [];
  pathText : string;
  CaesarShift: CaesarShift;
  selectedValue: string;

  constructor(private singleton: Singleton){
    this.CaesarShift = new CaesarShift();
    this.pathText = singleton.text;
    this.displayColumns();
  }
  
  displayColumns(){
    for(let i = 1; i < 26; i++){
      let columnValue = this.CaesarShift.shift(this.pathText, i);
      this.resultsColumns.push({value: columnValue, viewValue: columnValue});
    }
  }

  shiftText(){
    this.singleton.solution = this.selectedValue;
  }

  ngOnInit() {
  }

}
