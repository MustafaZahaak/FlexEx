import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, option: string = ''): string {
    
    if (!value) return '';

    switch (option) {
      case 'all': //first letter of every word
        return value.replace(/\b\w/g, (char) => char.toUpperCase());

      case 'whole': // entire word capitalization
        return value
          .split(' ')
          .map(word => word.toUpperCase())
          .join(' ');

      default: // first letter of the string
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

  }
}
