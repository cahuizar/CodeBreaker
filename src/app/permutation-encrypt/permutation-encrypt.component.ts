import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permutation-encrypt',
  templateUrl: './permutation-encrypt.component.html',
  styleUrls: ['./permutation-encrypt.component.css']
})
export class PermutationEncryptComponent {

    autoTicks = false;
    disabled = false;
    invert = false;
    max = 10;
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
