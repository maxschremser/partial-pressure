import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meter'
})
export class MeterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + 'm';
  }

}
