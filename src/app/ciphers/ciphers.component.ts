import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciphers',
  templateUrl: './ciphers.component.html',
  styleUrls: ['./ciphers.component.css']
})
export class CiphersComponent implements OnInit {
    ciphers = [
        { name: 'Caesar Shift', img: 'assets/caesarShift.png', path: '/caesar' },
        { name: 'Keyword', img: 'assets/keyword.png', path:'/keyword' },
        { name: 'Transpose', img: 'assets/transpose.svg', path:'/transpose' },
        { name: 'Kasiski', img: 'assets/kasiski.svg', path:'/kasiski' },
        { name: 'Permutation', img: 'assets/permutation.svg', path:'/permutation' }
    ]
  constructor() { }

  ngOnInit() {
  }

}
