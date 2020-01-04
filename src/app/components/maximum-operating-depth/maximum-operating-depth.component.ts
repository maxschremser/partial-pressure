import {Component, OnInit} from '@angular/core';
import {DATA, ean_range} from '../../data/data';

@Component({
  selector: 'app-maximum-operating-depth',
  templateUrl: './maximum-operating-depth.component.html',
  styleUrls: ['./maximum-operating-depth.component.css']
})
export class MaximumOperatingDepthComponent implements OnInit {
  depths = DATA.depths;
  ppo2 = DATA.ppo2;
  ean = DATA.ean;

  constructor() {
  }

  ngOnInit() {
  }

  mod(ppo2: number, fo2: number) {
    return ((10 * (ppo2 / (fo2 / 100))) - 10).toFixed(1);
  }
}
