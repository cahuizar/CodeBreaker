import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decrypt-ciphers',
  templateUrl: './decrypt-ciphers.component.html',
  styleUrls: ['./decrypt-ciphers.component.css']
})
export class DecryptCiphersComponent implements OnInit {
    ciphers = [
        { name: 'Caesar Shift', img: 'assets/caesarShift.png', path: '/caesar-decrypt' },
        { name: 'Keyword', img: 'assets/keyword.png', path:'/keyword-decrypt' },
        { name: 'Transpose', img: 'assets/transpose.png', path:'/transpose-decrypt' },
        { name: 'Anagram', img: 'assets/anagram.png', path:'/anagram-decrypt' }
    ]
  constructor() { }

  ngOnInit() {
  }

}
