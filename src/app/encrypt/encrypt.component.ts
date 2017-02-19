import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css']
})
export class EncryptComponent implements OnInit {
    ciphers = [
        { name: 'Caesar Shift', img: '../../assets/caesarShift.png' },
        { name: 'Keyword', img: '../../assets/keyword.png' },
        { name: 'Transpose', img: '../../assets/transpose.png' },
        { name: 'Kasiski', img: '../../assets/kasiski.png' },
        { name: 'Permutation', img: '../../assets/permutation.png' }
    ]
  constructor() {

  }

  ngOnInit() {
  }

}
