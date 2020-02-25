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
  averageSalaryToShow: number;
  employees: Employee[];
  isAverageSalaryToShowInitialized: boolean;
  
  constructor(private employeesService : EmployeesService) { }

  ngOnInit() {
    this.loadEmployees();
    
  }

  loadEmployees() : void {
    this.employeesService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      this.countAverageSalary();
    });
    
  }

  countAverageSalary() : void {
    this.averageSalary = this.employees
    .map((employee) => employee.salary)
    .reduce((prev, next) => (prev + next))/this.employees.length;
  }

  onShownAverageSalary(averageSalary : number) : void {
    this.averageSalaryToShow = averageSalary;
    this.isAverageSalaryToShowInitialized = true;
  }

  hideAverageSalary() : void {
    this.isAverageSalaryToShowInitialized = false;
  }

}
