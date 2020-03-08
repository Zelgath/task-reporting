import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesListComponent } from '../employees-list/employees-list.component';

@Component({
  selector: 'tr-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.less']
})
export class EmployeeDetailsComponent implements OnInit {

  employee : Employee;
  employeeForm : FormGroup;


  constructor(private employeesService : EmployeesService,
              private route : ActivatedRoute,
              private formBuilder : FormBuilder,
              ) { }

              // private employeesList : EmployeesListComponent

  ngOnInit() {
    this.loadEmployee();
  }

  buildEmployeeForm() {
    return this.formBuilder.group ({
      firstName : [this.employee.firstName, Validators.required],
      lastName : [this.employee.lastName, Validators.required],
      email : [this.employee.email, Validators.required],
      phoneNumber : [this.employee.phoneNumber, [Validators.required, Validators.minLength(9)]],
      hireDate : [this.employee.hireDate, Validators.required],
      jobId : [this.employee.jobId, Validators.required],
      salary : [this.employee.salary, Validators.required],
      managerId : [this.employee.managerId, Validators.required],
      departmentId : [this.employee.departmentId, Validators.required]
    });
  }

  loadEmployee() {
    this.employee = this.route.snapshot.data['employee'];
  }

  updateEmployee() {
    this.employeesService.updateEmployee(this.employee.id, this.employeeForm.value).subscribe(() => {
      this.loadEmployee();
      // this.employeesList.loadEmployees();
      // this.employeesList.hideEmployeeAddingPanel();
    })
  }
}
