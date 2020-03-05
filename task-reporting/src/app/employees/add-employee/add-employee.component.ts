import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateChangerComponent } from 'src/app/shared-module/date-changer/date-changer.component';

@Component({
  selector: 'tr-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.less']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm : FormGroup;

  toShow : string = this.changeDate("2020-03-04T23:00:00.000Z");

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

  changeDate(inputDate : string) : string {
    const changedDate = inputDate.replace("T23:00:00.000Z", "");
    const formattedDate = changedDate.replace("-", "/");
    const outputDate = formattedDate.replace(formattedDate.slice(-2),0 + (+formattedDate.slice(-2) + 1).toString())
    return outputDate;
}

}
