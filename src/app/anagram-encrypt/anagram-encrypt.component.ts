import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagram-encrypt',
  templateUrl: './anagram-encrypt.component.html',
  styleUrls: ['./anagram-encrypt.component.css']
})
export class AnagramEncryptComponent {
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
