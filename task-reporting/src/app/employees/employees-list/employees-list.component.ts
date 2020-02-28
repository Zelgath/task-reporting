import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../employees.service';
import { SpinnerComponent } from 'src/app/shared-module/spinner/spinner.component';
import { ActivatedRoute } from '@angular/router';
import { Sort } from '@angular/material';

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
  showSpinner : boolean = true;
  sortedEmployees : Employee[];
  
  constructor(private employeesService : EmployeesService) {
    this.sortedEmployees = this.employees.slice();
   }

  ngOnInit() {
    this.loadEmployees();
    
  }

  loadEmployees() : void {
    this.employeesService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      this,this.showSpinner=false;
      this.countAverageSalary();
    });
    
  }

  sortEmployees(sort : Sort) {
    const data = this.employees.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedEmployees = data;
      return;
    }
    this.sortedEmployees = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'lastName': return this.compare(a.lastName, b.lastName, isAsc);
        case 'phoneNumber': return this.compare(a.phoneNumber, b.phoneNumber, isAsc);
        case 'jobId': return this.compare(a.jobId, b.jobId, isAsc);
        case 'departmentId': return this.compare(a.departmentId, b.departmentId, isAsc);
        case 'salary': return this.compare(a.salary, b.salary, isAsc);
        default: return 0;
     } 
    })
  }
  

  compare (a : number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
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

  setSpinnerActive() {
    this.showSpinner=true;
  }

}
