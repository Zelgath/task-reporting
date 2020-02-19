import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberFormattingPipe } from './pipes/phone-number-formatting.pipe';



@NgModule({
  declarations: [PhoneNumberFormattingPipe],
  imports: [
    CommonModule
  ],
  exports: [PhoneNumberFormattingPipe]
})
export class SharedModule { }
