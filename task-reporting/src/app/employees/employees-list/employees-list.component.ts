import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../employees.service';
import { SpinnerComponent } from 'src/app/shared-module/spinner/spinner.component';
import { ActivatedRoute } from '@angular/router';

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
  
  constructor(private employeesService : EmployeesService) { }

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

  sortEmployeesByFirstNames() : void {
    this.employees.sort();
    this.loadEmployees();
  }

}
