import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberFormatting'
})
export class PhoneNumberFormattingPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    } 
    return value.split('.').join(' ');
  }

  
}