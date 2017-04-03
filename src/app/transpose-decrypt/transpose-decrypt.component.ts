import { Component, OnInit } from '@angular/core';
import { Singleton } from '../singleton.service';

@Component({
  selector: 'app-transpose-decrypt',
  templateUrl: './transpose-decrypt.component.html',
  styleUrls: ['./transpose-decrypt.component.css']
})
export class TransposeDecryptComponent {
    selectedValue: string;
    pathText: string;
    numColumns = [
        {value:1, viewValue: '1'},
        {value:2, viewValue: '2'},
        {value:3, viewValue: '3'},
        {value:4, viewValue: '4'},
        {value:5, viewValue: '5'},
    ];
    constructor(private singleton: Singleton) { 
         this.pathText = singleton.solution;
    }
}
