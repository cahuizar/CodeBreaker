import { Component, OnInit } from '@angular/core';
import { Singleton } from '../singleton.service';

@Component({
  selector: 'app-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['./worksheet.component.css']
})
export class WorksheetComponent implements OnInit {
constructor(private singleton: Singleton) { 
    this.text = singleton.text;
    this._values = [];
    this._solution = [];
    this.solution = "";
   }

  PushValue(): void{
    this._values = [];

    if(this.a == "" || this.a == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.a);
    }
    if(this.b == "" || this.b == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.b);
    }
    if(this.c == "" || this.c == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.c);
    }
    if(this.d == "" || this.d == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.d);
    }
    if(this.e == "" || this.e == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.e);
    }
    if(this.f == "" || this.f == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.f);
    }
    if(this.g == "" || this.g == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.g);
    }
    if(this.h == "" || this.h == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.h);
    }
    if(this.i == "" || this.i == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.i);
    }
    if(this.j == "" || this.j == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.j);
    }
    if(this.k == "" || this.k == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.k);
    }
    if(this.l == "" || this.l == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.l);
    }
    if(this.m == "" || this.m == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.m);
    }
    if(this.n == "" || this.n == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.n);
    }
    if(this.o == "" || this.o == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.o);
    }
    if(this.p == "" || this.p == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.p);
    }
    if(this.q == "" || this.q == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.q);
    }
    if(this.r == "" || this.r == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.r);
    }
    if(this.s == "" || this.s == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.s);
    }
    if(this.t == "" || this.t == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.t);
    }
    if(this.u == "" || this.u == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.u);
    }
    if(this.v == "" || this.v == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.v);
    }
    if(this.w == "" || this.w == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.w);
    }
    if(this.x == "" || this.x == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.x);
    }
    if(this.y == "" || this.y == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.y);
    }
    if(this.z == "" || this.z == undefined){
      this._values.push("-");
    }
    else{
      this._values.push(this.z);
    }
    this.CalculateResult();
    
  }

  CalculateResult(): void{
    let text = this.text.split('');
    let abc = "abcdefghijklmnopqrstuvwxyz".split('');
    let isFound = false;
    for(let x = 0; x < text.length; x++){
        for(let y = 0; y < abc.length; y++){
          if(text[x] == abc[y]){
            this._solution[x] = this._values[y];
            isFound = true;
            break;
          }
        }
        if(!isFound){
          this._solution[x] = "-";
        }
        isFound = false;
    }
    this.solution = this._solution.join("");
  }

  ngOnInit() {
  }
  private text;
  private _values;
  private _solution;
  private solution;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
  h: string;
  i: string;
  j: string;
  k: string;
  l: string;
  m: string;
  n: string;
  o: string;
  p: string;
  q: string;
  r: string;
  s: string;
  t: string;
  u: string;
  v: string;
  w: string;
  x: string;
  y: string;
  z: string;

}
