import { Component, OnInit } from '@angular/core';
import { Encipher } from '../encipher';
import { Decipher } from '../decipher';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    text : string[];
    cipher : Encipher;
    decipher : Decipher;

    constructor() {
        this.text = [];
        this.cipher = new Encipher();
        this.decipher = new Decipher();
     }

     ngOnInit() {
     }

    encrypt(text: HTMLInputElement){
        this.text = text.value.replace(/\s+/g, '').split('');
        this.cipher.setText(this.text);
        console.log(`Encrypting: ${this.cipher.getText()}`);
        return false;
    }
    decrypt(text: HTMLInputElement){
        this.text = text.value.replace(/\s+/g, '').split('');
        this.decipher.setText(this.text);
        console.log(`Decrypting: ${this.decipher.getText()}`);
        return false;
    }
    getText() : string[]{
        return this.cipher.getText();
    }

}
