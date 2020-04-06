import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { GradesService } from 'src/app/services/grades.service';
import { ContractsService } from 'src/app/services/contracts.service';
import { Employee } from 'src/app/models/employee';
import { Contract } from 'src/app/models/contract';

@Component({
  selector: 'tr-contracts-assigments',
  templateUrl: './contracts-assigments.component.html',
  styleUrls: ['./contracts-assigments.component.less']
})
export class ContractsAssigmentsComponent implements OnInit {

  employees : Employee[];
  employeesWithActiveContract : Employee[];
  employeesWithOnHoldContract : Employee[];
  EmployeesWithHistoryContract : Employee[];
  contracts : Contract[];
  activeContracts : Contract[];
  onHoldContracts : Contract[];
  historyContracts : Contract[];

  constructor(private employeesService : EmployeesService,
              private gradesService : GradesService,
              private contractsService : ContractsService) { }

  ngOnInit() {
    this.loadEmployees();
    this.loadContracts();
  }

  loadEmployees (): void  {
    this.employeesService.getEmployees().subscribe((employees)=>{
      this.employees = employees;
      })
  } 

  loadContracts (): void {
    this.contractsService.getContracts().subscribe((contracts)=>{
      this.contracts = contracts;
      this.activeContracts = contracts.filter(contract=>
        contract.active && !contract.onHold);
      this.onHoldContracts = contracts.filter(contract=>
        !contract.active && contract.onHold);
      this.historyContracts = contracts.filter(contract=>
        !contract.active && !contract.onHold);
    })
  }
}
