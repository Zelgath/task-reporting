import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { EmployeesListComponent } from '../employees-list/employees-list.component';


@Component({
  selector: 'tr-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.less'],
  providers: []
})
export class AddEmployeeComponent implements OnInit {

  employeeForm : FormGroup;

  constructor(private formBuilder : FormBuilder,
              private employeesService : EmployeesService,
              private employeesList : EmployeesListComponent) { }

  ngOnInit() {
    this.employeeForm = this.buildEmployeeForm();
  }
  

  buildEmployeeForm() {
    return this.formBuilder.group ({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', Validators.required],
      phoneNumber : ['', [Validators.required, Validators.minLength(9)]],
      hireDate : ['', Validators.required],
      jobId : ['', Validators.required],
      salary : ['', Validators.required],
      managerId : ['', Validators.required],
      departmentId : ['', Validators.required]
    });
  }

  addEmployee() {
    this.employeesService.addEmployee(this.employeeForm.value).subscribe(() => {
      this.employeesList.loadEmployees();
      this.employeesList.hideEmployeeAddingPanel();
    })
  }
}
