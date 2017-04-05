import { Component, OnInit } from '@angular/core';
import { Singleton } from '../singleton.service';
import { Transpose } from '../transpose';

@Component({
  selector: 'app-transpose-encrypt',
  templateUrl: './transpose-encrypt.component.html',
  styleUrls: ['./transpose-encrypt.component.css']
})
export class TransposeEncryptComponent{
    selectedValue: string;
    pathText: string;
    transpose: Transpose;

    numColumns = [];
     constructor(private singleton: Singleton) { 
         this.pathText = singleton.solution;
         this.transpose = new Transpose(this.pathText);
         this.transpose.CalculateColumns();
         this.numColumns = this.transpose.Columns;
     }

     Calculate(): void{
         this.transpose.TransposeColumns(this.selectedValue)
     }



}
