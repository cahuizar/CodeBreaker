import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.css']
})
export class DecryptComponent implements OnInit {
    ciphers = [
        { name: 'Caesar Shift', img: 'assets/caesarShift.png', path: '/caesar-decrypt' },
        { name: 'Keyword', img: 'assets/keyword.png', path:'/keyword-decrypt' },
        { name: 'Transpose', img: 'assets/transpose.svg', path:'/transpose-decrypt' },
        { name: 'Anagram', img: 'assets/anagram.png', path:'/anagram-decrypt' }
    ]
  constructor() { }

  ngOnInit() {
  }

}
