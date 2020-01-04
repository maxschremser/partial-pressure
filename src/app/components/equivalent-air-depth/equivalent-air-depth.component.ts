import {Component, OnInit} from '@angular/core';
import {DATA} from '../../data/data';

@Component({
  selector: 'app-equivalent-air-depth',
  templateUrl: './equivalent-air-depth.component.html',
  styleUrls: ['./equivalent-air-depth.component.css']
})
export class EquivalentAirDepthComponent implements OnInit {

  depths = DATA.depths;
  ean = DATA.ean;
  ppo2 = DATA.ppo2;

  constructor() {
  }

  ngOnInit() {
  }

  ead(fo2: number, depth: number) {
    return (((1 - (fo2 / 100)) * (depth + 10) / 0.79) - 10).toFixed(1);
  }
}
