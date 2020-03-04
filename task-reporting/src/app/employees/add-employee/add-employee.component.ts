import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

}
