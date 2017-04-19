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
    test: string;
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
            this.tickSelected.push(columnValue);
            this.totalColumns.push(columnValue);
        }
    }

    public submit(){
        for(let i = 1; i < this.totalColumns.length+1; i++){
            let selection = (<HTMLInputElement>document.getElementById("column"+i)).value;
            this.colSelecion.push(selection);
        }
        this.anagram.CalculateAnagram(this.totalColumns.length, this.colSelecion);
        this.singleton.solution = this.anagram.Solution;
    }

}
