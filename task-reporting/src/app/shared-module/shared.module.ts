import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberFormattingPipe } from './pipes/phone-number-formatting.pipe';
import { JobIdFormattingPipe } from './pipes/job-id-formatting.pipe';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [PhoneNumberFormattingPipe, JobIdFormattingPipe, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [PhoneNumberFormattingPipe, JobIdFormattingPipe, HeaderComponent]
})
export class SharedModule { }
