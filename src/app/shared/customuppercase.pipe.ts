import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customuppercase',
})
export class CustomuppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
