import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AverageSalaryComponent } from './average-salary/average-salary.component';

import { EmployeesService } from './employees.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../shared-module/shared.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { RouterModule } from '@angular/router';
import { EmployeeResolve } from './employee-resolve.service';
import { MatSortModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MomentUtcDateAdapter } from '../shared-module/moment-utc-date-adapter';
import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from '../admin/admin.module';




@NgModule({
  exports: [EmployeesListComponent, AddEmployeeComponent],
  declarations: [EmployeesListComponent, AverageSalaryComponent, EmployeeDetailsComponent, AddEmployeeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    MatSortModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    AdminModule
  ],
  providers: [EmployeesService, EmployeeResolve]
})
export class EmployeesModule { }
