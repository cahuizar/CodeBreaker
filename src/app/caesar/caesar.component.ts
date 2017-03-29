import { Component, OnInit } from '@angular/core';
import { CaesarShift } from '../caesar-shift';


@Component({
  selector: 'app-caesar',
  templateUrl: './caesar.component.html',
  styleUrls: ['./caesar.component.css']
})
export class CaesarComponent {
      autoTicks = false;
      disabled = false;
      invert = false;
      max = 26;
      min = 1;
      showTicks = false;
      step = 1;
      thumbLabel = true;
      value = 1;
      vertical = false;
      text : string[];
      pathText: String;
      selectedValue: number;
      numColumns = [];
      result: string;
      CaesarShift: CaesarShift;


      constructor(){
        // shifted 1 should be ifmmpnzobnfjtdbsmpt
        this.CaesarShift = new CaesarShift();
        this.pathText = "hellomynameiscarlos";
        this.generateColumns();
        console.log(`Encrypting: ${this.pathText}`);
      }

      generateColumns(){
        for(let i = 1; i < 26; i++){
          this.numColumns.push({value: i, viewValue: i});
        }
      }

      shiftText(){
        this.result = this.CaesarShift.shift(this.pathText, this.selectedValue);
        console.log(`Result: ${this.result}`);
      }

}
