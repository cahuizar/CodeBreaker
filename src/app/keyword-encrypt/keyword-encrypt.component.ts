import { Component, OnInit } from '@angular/core';
import { Singleton } from '../singleton.service';

@Component({
  selector: 'app-keyword-encrypt',
  templateUrl: './keyword-encrypt.component.html',
  styleUrls: ['./keyword-encrypt.component.css']
})
export class KeywordEncryptComponent implements OnInit {

  pathText: string;

  constructor(private singleton: Singleton) { 
         this.pathText = singleton.solution;
  }

  ngOnInit() {
  }

}
