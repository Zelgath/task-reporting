import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/employee';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'tr-projects-assigments',
  templateUrl: './projects-assigments.component.html',
  styleUrls: ['./projects-assigments.component.less']
})
export class ProjectsAssigmentsComponent implements OnInit {

  employees : Employee [];
  projects : Project [];
  isSubrowOpened : boolean = false;
  chosenEmployee : Employee;

  constructor(private employeesService : EmployeesService,
              private projectsService : ProjectsService) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees (): void  {
    this.employeesService.getEmployees().subscribe((employees)=>{
      this.employees = employees;
    })
  } 

  loadProjects (): void {
    this.projectsService.getProjects().subscribe((projects)=>{
      this.projects = projects;
    })
  }

  chooseEmployee(i : number) : void{
    this.employeesService.getEmployee(i).subscribe((employee)=>{
      this.chosenEmployee = employee;
      
    })
    
  }



}
