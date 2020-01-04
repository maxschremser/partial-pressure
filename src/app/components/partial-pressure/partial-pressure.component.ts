import {Component, OnInit} from '@angular/core';
import {DATA, ean_range} from '../../data/data';

@Component({
  selector: 'app-partial-pressure',
  templateUrl: './partial-pressure.component.html',
  styleUrls: ['./partial-pressure.component.css']
})
export class PartialPressureComponent implements OnInit {
  depths = DATA.depths;
  ean = DATA.ean;
  PPO2_MAX = DATA.PPO2_MAX;
  PPO2_WARN = DATA.PPO2_WARN;

  constructor() {
  }

  ngOnInit() {
  }

  ppo2(depth: number, fo2: number) {
    return (((depth / 10) + 1) * fo2 / 100).toFixed(2);
  }
}
