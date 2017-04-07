import { Component, OnInit } from '@angular/core';
import { Singleton } from '../singleton.service';
import { Transpose } from '../transpose';

@Component({
  selector: 'app-transpose-decrypt',
  templateUrl: './transpose-decrypt.component.html',
  styleUrls: ['./transpose-decrypt.component.css']
})
export class TransposeDecryptComponent {
    selectedValue: string;
    pathText: string;
    transpose: Transpose;
    private _solution;

    numColumns = [];
    constructor(private singleton: Singleton) { 
        this._solution = "";
        this.pathText = singleton.text;
        this.transpose = new Transpose(this.pathText);
        this.transpose.CalculateColumns();
        this.numColumns = this.transpose.Columns;
        
    }

    Calculate(): void{
        this.transpose.TransposeColumns(this.selectedValue);
        this.singleton.solution = this.transpose.Solution;
        this._solution = "Solution: "+this.transpose.Solution;
    }

    CheckEmpty(): void{
        if(this.numColumns != null){
            // display error message and disable selection
        }
        else{
            // remove error message and enable section
        }
    }

}
