import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { Employee } from 'src/app/models/employee';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'tr-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.less']
})
export class StatisticsViewComponent implements OnInit {

  employees : Employee [];
  projects : Project [];
 
  

  constructor(private employeesService : EmployeesService,
              private projectsService : ProjectsService) { }
    

  ngOnInit() {
    // this.loadEmployees();
    // this.loadProjects();
  }

  // loadProjects() {
  //   this.projectsService.getProjects().subscribe((projects) =>{
  //     this.projects = projects;
  //   })
  // }

  // loadEmployees() {
  //   this.employeesService.getEmployees().subscribe((employees) => {
  //     this.employees = employees;
  //   })
  



}
