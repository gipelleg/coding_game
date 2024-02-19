import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {
  transform(name: string): string {
    if (!name) return '';

    const words = name.split(' ');

    const initials = words.map(word => word.charAt(0)).join('').toUpperCase();

    return initials;
  }
}
