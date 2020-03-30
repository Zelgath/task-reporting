import { Component, OnInit} from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeesService } from '../../services/employees.service';
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
  isAddingPanelOnView : boolean = false;
  isAddEmployeeButtonActive : boolean = true;
  
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
          case 'jobId': return this.compare(a.job.description, b.job.description, isAsc);
          case 'departmentId': return this.compare(a.department.description, b.department.description, isAsc);
          case 'salary': return this.compare(a.location.descritpion, b.location.descritpion, isAsc);
          default: return 0;
        }
      });
    }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() : void {
    this.employeesService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      this.showSpinner=false;
      this.countAverageSalary();
    });
  }

  countAverageSalary() : void {
    this.averageSalary = this.employees
    .map((employee) => employee.id)
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

  showEmployeeAddingPanel() : void {
    this.isAddingPanelOnView = true;
    this.isAddEmployeeButtonActive = false;
  }

  hideEmployeeAddingPanel() : void {
    this.isAddingPanelOnView = false;
    this.isAddEmployeeButtonActive = true;
  }
}
