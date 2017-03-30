import { Component, OnInit } from '@angular/core';
import { CaesarShift } from '../caesar-shift';

@Component({
  selector: 'app-caesar-decrypt',
  templateUrl: './caesar-decrypt.component.html',
  styleUrls: ['./caesar-decrypt.component.css']
})
export class CaesarDecryptComponent implements OnInit {
  resultsColumns = [];
  pathText : string;
  result: string;
  CaesarShift: CaesarShift;

  constructor(){
    this.CaesarShift = new CaesarShift();
    this.pathText = "ifmmpnzobnfjtdbsmpt";
    this.displayColumns();
    console.log(`Encrypting: ${this.pathText}`);
  }
  
  displayColumns(){
    for(let i = 1; i < 26; i++){
      let columnValue = this.CaesarShift.shift(this.pathText, i);
      this.resultsColumns.push({value: columnValue, viewValue: columnValue});
    }
  }

  ngOnInit() {
  }

}
