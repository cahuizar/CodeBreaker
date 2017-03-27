import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciphers',
  templateUrl: './ciphers.component.html',
  styleUrls: ['./ciphers.component.css']
})
export class CiphersComponent implements OnInit {
    ciphers = [
        { name: 'Caesar Shift', img: 'assets/caesarShift.png', path: '/caesar' },
        { name: 'Keyword', img: 'assets/keyword.png', path:'/keyword-encrypt' },
        { name: 'Transpose', img: 'assets/transpose.png', path:'/transpose-encrypt' },
        { name: 'Anagram', img: 'assets/anagram.png', path:'/anagram-encrypt' }
    ]
  constructor() { }

  ngOnInit() {
  }

}
