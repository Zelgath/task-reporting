import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.less']
})
export class EmployeesListComponent implements OnInit {

  employees : Employee[] = [
    {
      id : 1,
    name : 'John',
    surname : 'Smith',
    age : 30,
    unit : 'DE01',
    position : 'Data Analyst',
    salary : 12000,
    startDate : '2017-08-01',
    endDate : null,
    fullTime : 1,
    location : 'Monachium'
    },
    {
      id : 2,
    name : 'Anna',
    surname : 'Kowalska',
    age : 33,
    unit : 'PL02',
    position : 'DevOps',
    salary : 15000,
    startDate : '2019-02-01',
    endDate : 'null',
    fullTime : 1,
    location : 'Cracow'
    },
    {
      id : 3,
    name : 'Bartosz',
    surname : 'Cryjack',
    age : 21,
    unit : 'NOR05',
    position : 'Trainee',
    salary : 2000,
    startDate : '2020-01-01',
    endDate : '2020-03-31',
    fullTime : 0.7,
    location : 'Oslo'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
