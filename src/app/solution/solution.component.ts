import { Component, OnInit } from '@angular/core';
import { Singleton } from '../singleton.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  private _solution: string;
  
  constructor(private singleton: Singleton) {
    this._solution = singleton.solution;
  }

  ngOnInit() {
  }

}
