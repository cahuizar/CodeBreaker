import { Component, OnInit } from '@angular/core';
import { Singleton } from '../singleton.service';
import { Anagram } from '../anagram';

@Component({
  selector: 'app-anagram-encrypt',
  templateUrl: './anagram-encrypt.component.html',
  styleUrls: ['./anagram-encrypt.component.css']
})
export class AnagramEncryptComponent {
    selectedValue: string;
    tickSelected = [];
    totalColumns = [];

    numColumns = [];

    pathText: string;
    anagram: Anagram;
    colSelecion = [];

    constructor(private singleton: Singleton) { 
         this.pathText = singleton.text;
         this.anagram = new Anagram(this.pathText);
         this.anagram.CalculateColumns();
         this.numColumns = this.anagram.Columns;
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

    public submit(){
        for(let i = 1; i < this.totalColumns.length+1; i++){
            let selection = document.getElementById("anagram-selection"+i);
            this.colSelecion.push(selection);
        }
        console.log("Here is the column selected", this.colSelecion);
    }

}
