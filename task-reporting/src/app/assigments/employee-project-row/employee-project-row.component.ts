import { Component, OnInit, Input, DoCheck, EventEmitter, AfterContentChecked, AfterViewChecked, OnChanges, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Project } from 'src/app/models/project';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectsAssigmentService } from 'src/app/services/projects-assigment.service';
import { ProjectsAssigment } from 'src/app/models/projectsAssigment';
import { Utilites } from 'src/app/shared-module/utilities';
import { Sort } from '@angular/material';

@Component({
  selector: 'tr-employee-project-row',
  templateUrl: './employee-project-row.component.html',
  styleUrls: ['./employee-project-row.component.less']
})
export class EmployeeProjectRowComponent implements OnInit, OnChanges, AfterContentChecked {

  @Input() employee : Employee;
  @Input() projects : Project[];
  @Output() assignedProject: EventEmitter<number> = new EventEmitter<number>();
  @Output() unassignedProject: EventEmitter<number> = new EventEmitter<number>();
  projectAssigmentForm : FormGroup;
  selectedProject : Project;
 
  constructor(private formBuilder : FormBuilder,
              private projectsAssigmentService : ProjectsAssigmentService,
              private utilities : Utilites) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.projectAssigmentForm = this.buildProjectAssigmentForm();
  }

  ngAfterContentChecked() { 
    if (this.projectAssigmentForm.valid){
      this.assignValuesToSelectedProject(this.projectAssigmentForm.get("projectId").value);
    }
  }

  buildProjectAssigmentForm () {
    return this.formBuilder.group({
      employeeId : [this.employee.id,Validators.required],
      projectId : ['',Validators.required]
    });
  }


  assignValuesToSelectedProject(projectId : number) : void {
    this.selectedProject = this.projects.find(project => project.id === projectId);
  }

  assignProjectToEmployee() {
    this.projectsAssigmentService.addProjectsAssigment(this.projectAssigmentForm.value).subscribe(()=>{
      this.assignedProject.emit(this.employee.id);
    })
  }


  unassignProjectFromEmployee(projectId : number) {
    const projectAssigmentToUnassign : ProjectsAssigment = {
      "id" : null,
      "employeeId" : this.employee.id,
      "projectId" : projectId
    }
    this.projectsAssigmentService.deleteProjectsAssigmentByFields(projectAssigmentToUnassign).subscribe(()=>{
      this.unassignedProject.emit(this.employee.id);
    })
  }

  sortTable(sort: Sort) {
    const data = this.employee.projects.slice();
    if (!sort.active || sort.direction === '') {
      this.employee.projects = data;
      return;
    }
      this.employee.projects = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'description': return this.utilities.compare(a.description, b.description, isAsc);
          case 'client': return this.utilities.compare(a.client, b.client, isAsc);
          case 'monthlyCost': return this.utilities.compare(a.monthlyCost, b.monthlyCost, isAsc);
          case 'startDate': return this.utilities.compare(a.startDate, b.startDate, isAsc);
          case 'endDate': return this.utilities.compare(a.endDate, b.endDate, isAsc);
          case 'totalCost': return this.utilities.compare(a.totalCost, b.totalCost, isAsc);
          default: return 0;
        }
      });
    }

  

 

}
