import { Component, OnInit } from '@angular/core';
import { CaesarShift } from '../caesar-shift';
import { Singleton } from '../singleton.service';


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


      constructor(private singleton: Singleton){
        this.CaesarShift = new CaesarShift();
        this.pathText = singleton.text;
        this.singleton.frequency();
        console.log(this.singleton.single());
        console.log(this.singleton.double());
        console.log(this.singleton.triple());
        this.generateColumns();
      }

      generateColumns(){
        for(let i = 1; i < 26; i++){
          this.numColumns.push({value: i, viewValue: i});
        }
      }

      shiftText(){
        this.result = this.CaesarShift.shift(this.pathText, this.selectedValue);
        this.singleton.solution = this.result;
        console.log(`Result: ${this.result}`);
      }

}
