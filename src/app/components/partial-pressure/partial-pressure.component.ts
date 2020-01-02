import {Component, OnInit} from '@angular/core';

interface PPO2 {
  ean: number;
  fo2: number;
}

const PRESSURES: PPO2[] = [];

@Component({
  selector: 'app-partial-pressure',
  templateUrl: './partial-pressure.component.html',
  styleUrls: ['./partial-pressure.component.css']
})
export class PartialPressureComponent implements OnInit {
  depths = [10, 12, 15, 18, 21, 24, 27, 30, 34, 37, 40];

  constructor() {
  }

  ngOnInit() {
  }

  range(from: number, to: number) {
    const arr = [];
    for (let fo2 = from; fo2 <= to; fo2++) {
      arr.push(fo2);
    }
    return arr;
  }

  ppo2(depth: number, fo2: number) {
    return (((depth / 10) + 1) * fo2 / 100).toFixed(2);
  }
}
