import { Component, OnInit, AfterContentChecked, OnChanges, ViewChild } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/employee';
import { Project } from 'src/app/models/project';
import { EmployeeProjectRowComponent } from '../employee-project-row/employee-project-row.component';

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
  activatedRowIndex : number;
  unassignedProjectsForChosenEmployee : Project[];
  @ViewChild(EmployeeProjectRowComponent, {static: false}) private employeeProjectRowComponent:EmployeeProjectRowComponent;

  constructor(private employeesService : EmployeesService,
              private projectsService : ProjectsService) { }

  ngOnInit() {
    this.loadEmployees();
    this.loadProjects();
  }

  refreshComponentViewAfterEmployeeAssigned(i : number) {
    this.loadEmployees();
    this.loadProjects();
    this.chooseEmployee(i);
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
      this.chosenEmployee=employee;
      this.setUnassignedProjectsForEmployee(employee);
      
      if(this.employeeProjectRowComponent && this.employeeProjectRowComponent.selectedProject){
        this.employeeProjectRowComponent.projectAssigmentForm.reset();
        this.employeeProjectRowComponent.assignValuesToSelectedProject(null);
      }
    })
    
  }

  activateRow(i : number) : void {
    this.activatedRowIndex = i;
  }

  setUnassignedProjectsForEmployee(employee : Employee) : void {
    let unassignedProjects : Project[];
    unassignedProjects = this.projects.filter(project=>
      !employee.projects.map((employee)=>employee.id).includes(project.id)
    );
    this.unassignedProjectsForChosenEmployee = unassignedProjects;
  }

}
