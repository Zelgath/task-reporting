import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'tr-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.less']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.buildEmployeeForm();
  }

  buildEmployeeForm() {
    return this.formBuilder.group ({
      firstName : '',
      lastName : '',
      email : '',
      phoneNumber : '',
      hireDate : '',
      jobId : '',
      salary : '',
      managerId : '',
      departmentId : ''
    });
  }

}
