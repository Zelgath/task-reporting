import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberFormattingPipe } from './pipes/phone-number-formatting.pipe';
import { JobIdFormattingPipe } from './pipes/job-id-formatting.pipe';



@NgModule({
  declarations: [PhoneNumberFormattingPipe, JobIdFormattingPipe],
  imports: [
    CommonModule
  ],
  exports: [PhoneNumberFormattingPipe, JobIdFormattingPipe]
})
export class SharedModule { }
