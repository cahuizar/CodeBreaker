import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-caesar',
  templateUrl: './caesar.component.html',
  styleUrls: ['./caesar.component.css'],
  directives: [ HomeComponent ]
})
export class CaesarComponent {
      autoTicks = false;
      disabled = false;
      invert = false;
      max = 26;
      min = 1;
      showTicks = false;
      step = 1;
      thumbLabel = true;
      value = 1;
      vertical = false;

      get tickInterval(): number | 'auto' {
        return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : null;
      }
      set tickInterval(v) {
        this._tickInterval = Number(v);
      }
      private _tickInterval = 1;

}
