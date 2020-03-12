import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetMenuComponent } from './timesheet-menu/timesheet-menu.component';
import { TimesheetEnteringComponent } from './timesheet-entering/timesheet-entering.component';



@NgModule({
  declarations: [TimesheetMenuComponent, TimesheetEnteringComponent],
  imports: [
    CommonModule
  ]
})
export class TimesheetModule { }
