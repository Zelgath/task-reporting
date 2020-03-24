import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssigmentsListComponent } from './assigments-list/assigments-list.component';
import { ProjectsAssigmentsComponent } from './projects-assigments/projects-assigments.component';
import { EmployeeProjectRowComponent } from './employee-project-row/employee-project-row.component';
import { EmployeeProjectRowSubrowComponent } from './employee-project-row-subrow/employee-project-row-subrow.component';



@NgModule({
  declarations: [AssigmentsListComponent, ProjectsAssigmentsComponent, EmployeeProjectRowComponent, EmployeeProjectRowSubrowComponent],
  imports: [
    CommonModule
  ]
})
export class AssigmentsModule { }
