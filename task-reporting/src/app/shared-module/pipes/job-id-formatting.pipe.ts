import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobIdFormatting'
})
export class JobIdFormattingPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    if (value === 'AD_VP') {
      return 'Vice President'
    }
    if (value === 'IT_PROG') {
      return 'Programmer'
    }
    if (value === 'FI_MGR') {
      return 'Finance Manager'
    }
    if (value === 'FI_ACCOUNT') {
      return 'Accountant'
    }
    if (value === 'PU_CLERK') {
      return 'PU Clerk'
    }
    if (value === 'ST_CLERK') {
      return 'ST Clerk'
    }
    if (value === 'ST_MAN') {
      return 'ST Manual'
    }
    return value + ' is Unknown JobId';
  }

}
