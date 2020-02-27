import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberFormattingPipe } from './pipes/phone-number-formatting.pipe';
import { JobIdFormattingPipe } from './pipes/job-id-formatting.pipe';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [PhoneNumberFormattingPipe, JobIdFormattingPipe, HeaderComponent, SpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [PhoneNumberFormattingPipe, JobIdFormattingPipe, HeaderComponent, SpinnerComponent]
})
export class SharedModule { }
