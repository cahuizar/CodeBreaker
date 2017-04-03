import { Component, OnInit } from '@angular/core';
import { Singleton } from '../singleton.service';

@Component({
  selector: 'app-keyword-decrypt',
  templateUrl: './keyword-decrypt.component.html',
  styleUrls: ['./keyword-decrypt.component.css']
})
export class KeywordDecryptComponent implements OnInit {

  pathText: string;

  constructor(private singleton: Singleton) { 
         this.pathText = singleton.solution;
  }
  
  ngOnInit() {
  }

}
