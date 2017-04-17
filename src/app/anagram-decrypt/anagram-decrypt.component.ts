import { Component, OnInit } from '@angular/core';
import { Singleton } from '../singleton.service';

@Component({
  selector: 'app-anagram-decrypt',
  templateUrl: './anagram-decrypt.component.html',
  styleUrls: ['./anagram-decrypt.component.css']
})
export class AnagramDecryptComponent {
    selectedValue: string;
    tickSelected = [];
    totalColumns = [];

    numColumns = [
        {value:1, viewValue: '1'},
        {value:2, viewValue: '2'},
        {value:3, viewValue: '3'},
        {value:4, viewValue: '4'},
        {value:5, viewValue: '5'},
    ];
    pathText: string;

    constructor(private singleton: Singleton) {
         this.pathText = singleton.text;
    }

    public enableColumns(){
        this.tickSelected = [];
        this.totalColumns = [];
        var test = +this.selectedValue;
        var columnValue;
        for(var i = 1; i <= test; i++){
            columnValue = {value: i, viewValue:i};
            console.log(columnValue.viewValue);
            this.tickSelected.push(columnValue);
            this.totalColumns.push(columnValue);
        }
    }

}
