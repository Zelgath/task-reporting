import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AverageSalaryComponent } from './average-salary/average-salary.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './employees.service';



@NgModule({
  exports: [EmployeesListComponent],
  declarations: [EmployeesListComponent, AverageSalaryComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [EmployeesService]
})
export class EmployeesModule { }
