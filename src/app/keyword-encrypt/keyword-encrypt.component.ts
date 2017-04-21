import { Component, OnInit } from '@angular/core';
import { Singleton } from '../singleton.service';
import { Keyword } from '../keyword';

@Component({
  selector: 'app-keyword-encrypt',
  templateUrl: './keyword-encrypt.component.html',
  styleUrls: ['./keyword-encrypt.component.css']
})
export class KeywordEncryptComponent {

  pathText: string;
  keyword: string;
  private _keyword;
  private solution;
  private _key: Keyword;

  constructor(private singleton: Singleton) { 
    this.pathText = singleton.text;
    this.solution = [];
    this._key = new Keyword();
  }

 removeDuplicateCharacters(): void{
   if(this.keyword != "" || this.keyword != undefined){
      this._keyword = this.keyword.split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
      this.solution = this._key.Keyword(this.pathText, this._keyword);
      this.singleton.solution = this.solution;
   }
  
}


}
