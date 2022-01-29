import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'morseMD5'
})
export class MorseMD5Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
