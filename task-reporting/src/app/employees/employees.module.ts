import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AverageSalaryComponent } from './average-salary/average-salary.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './employees.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PhoneNumberFormattingPipe } from '../shared-module/pipes/phone-number-formatting.pipe';
import { SharedModule } from '../shared-module/shared.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { RouterModule } from '@angular/router';
import { EmployeeResolve } from './employee-resolve.service';
import { MatSortModule } from '@angular/material';
import { AddEmployeeComponent } from './add-employee/add-employee.component';



@NgModule({
  exports: [EmployeesListComponent],
  declarations: [EmployeesListComponent, AverageSalaryComponent, EmployeeDetailsComponent, AddEmployeeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    MatSortModule
  ],
  providers: [EmployeesService, EmployeeResolve]
})
export class EmployeesModule { }
