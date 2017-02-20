import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.css']
})
export class DecryptComponent implements OnInit {
    ciphers = [
        { name: 'Caesar Shift', img: 'assets/caesarShift.png', path: '/caesar' },
        { name: 'Keyword', img: 'assets/keyword.png', path:'/keyword' },
        { name: 'Transpose', img: 'assets/transpose.svg', path:'/transpose' },
        { name: 'Kasiski', img: 'assets/kasiski.svg', path:'/kasiski' },
        { name: 'Permutation', img: 'assets/permutation.svg', path:'/permutation' }
    ]
    tools = [{}
    ]
  constructor() { }

  ngOnInit() {
  }

}
