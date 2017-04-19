import { Component, OnInit } from '@angular/core';
import { Singleton } from '../singleton.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private text: string;

    constructor(private singleton: Singleton) {
        this.text = "";
     }

     ngOnInit() {
     }

    encrypt(text: HTMLInputElement){
        this.text = text.value.replace(/\s+/g, '');
        this.singleton.text = this.text;
        this.singleton.frequency();
        return false;
    }
    decrypt(text: HTMLInputElement){
        this.text = text.value.replace(/\s+/g, '');
        this.singleton.text = this.text;
        this.singleton.frequency();
        return false;
    }
}
