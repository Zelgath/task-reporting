import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';



@NgModule({
  exports: [EmployeesListComponent],
  declarations: [EmployeesListComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
