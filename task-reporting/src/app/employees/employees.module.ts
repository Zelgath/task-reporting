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



@NgModule({
  exports: [EmployeesListComponent],
  declarations: [EmployeesListComponent, AverageSalaryComponent, EmployeeDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  providers: [EmployeesService]
})
export class EmployeesModule { }
