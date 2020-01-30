import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AverageSalaryComponent } from './average-salary/average-salary.component';



@NgModule({
  exports: [EmployeesListComponent],
  declarations: [EmployeesListComponent, AverageSalaryComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
