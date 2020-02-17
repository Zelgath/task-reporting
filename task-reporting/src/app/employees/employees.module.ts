import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AverageSalaryComponent } from './average-salary/average-salary.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './employees.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  exports: [EmployeesListComponent],
  declarations: [EmployeesListComponent, AverageSalaryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [EmployeesService]
})
export class EmployeesModule { }
