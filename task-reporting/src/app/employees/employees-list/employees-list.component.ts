import { Component, OnInit, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';
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
  sortedEmployees : Employee [];
  isAverageSalaryOnView : boolean = false;
  
  constructor(private employeesService : EmployeesService) {
    
   }

   sortEmployees(sort: Sort) {
    const data = this.employees.slice();
    if (!sort.active || sort.direction === '') {
      this.employees = data;
      return;
    }
      this.employees = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'lastName': return this.compare(a.lastName, b.lastName, isAsc);
          case 'phoneNumber': return this.compare(a.phoneNumber, b.phoneNumber, isAsc);
          case 'jobId': return this.compare(a.jobId, b.jobId, isAsc);
          case 'departmentId': return this.compare(a.departmentId, b.departmentId, isAsc);
          case 'salary': return this.compare(a.salary, b.salary, isAsc);
          default: return 0;
        }
      });
    }

  //  sortEmployees(sort : Sort) : void {
  //    switch (sort.active) {
  //    case 'lastName': this.employees.sort((a,b) => a.lastName < b.lastName ? -1 : 1);
  //    case 'phoneNumber': this.employees.sort((a,b) => a.phoneNumber < b.phoneNumber ? -1: 1);
  //    case 'jobId': this.employees.sort((a,b) => a.jobId < b.jobId ? -1: 1);
  //    case 'departmentId': this.employees.sort((a,b) => a.departmentId < b.departmentId ? -1: 1);
  //    case 'salary': this.employees.sort((a,b) => a.salary < b.salary ? -1: 1);
  //    default: 0;
  //    }
  //  }


  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }



  ngOnInit() {
    this.loadEmployees();
    
  }

  // ngAfterViewChecked(): void {
  //   this.sortedEmployees = this.employees.slice();
  // }

  loadEmployees() : void {
    this.employeesService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      this.showSpinner=false;
      this.countAverageSalary();
    });
   
    
  }

  


  countAverageSalary() : void {
    this.averageSalary = this.employees
    .map((employee) => employee.salary)
    .reduce((prev, next) => (prev + next))/this.employees.length;
    this.sortedEmployees = this.employees.slice();
  }

  onShownAverageSalary(averageSalary : number) : void {
    this.averageSalaryToShow = averageSalary;
    this.isAverageSalaryToShowInitialized = true;
    this.isAverageSalaryOnView = true;
  }


  hideAverageSalary() : void {
    this.isAverageSalaryToShowInitialized = false;
    this.isAverageSalaryOnView = false;
  }

  setSpinnerActive() {
    this.showSpinner=true;
  }


}
