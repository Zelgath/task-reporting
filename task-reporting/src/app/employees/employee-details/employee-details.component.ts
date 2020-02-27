import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee';

@Component({
  selector: 'tr-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.less']
})
export class EmployeeDetailsComponent implements OnInit {

  employee : Employee;


  constructor(private employeesService : EmployeesService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.loadEmployee();
  }

  loadEmployee() {
    this.employee = this.route.snapshot.data['employee'];
  }
}
