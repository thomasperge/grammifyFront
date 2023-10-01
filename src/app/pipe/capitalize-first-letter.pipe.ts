import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

  transform(value: string | null, ...args: unknown[]): string {
    let stringText = "";
    if(value === 'short') stringText = "Concise Text"
    if(value === 'same') stringText = "Text of Equal Size"
    if(value === 'long') stringText = "Extended Text"
    if (value === null) return '';
    return stringText;
  }
}
