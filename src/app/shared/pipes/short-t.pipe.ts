import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortT'
})
export class ShortTPipe implements PipeTransform {

  transform(value:string, maxCount = 15): unknown {
    return `${value.substring(0, maxCount)} ${value.length > maxCount ? '...' : ''}`;
  }

}
