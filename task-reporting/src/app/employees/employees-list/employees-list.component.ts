import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.less']
})
export class EmployeesListComponent implements OnInit {

  averageSalary: number;
  employees: Employee[];
  
  constructor(private employeesService : EmployeesService) { }

  ngOnInit() {
    this.loadEmployees();
    
  }

  loadEmployees() : void {
    this.employeesService.getCars().subscribe((employees) => {
      this.employees = employees;
      this.countAverageSalary();
    }, error => {
      alert("An error has occured");
    });
    
  }

  countAverageSalary() : void {
    this.averageSalary = this.employees
    .map((employee) => employee.salary)
    .reduce((prev, next) => (prev + next))/this.employees.length;
  }

}
