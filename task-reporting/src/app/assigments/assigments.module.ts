import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssigmentsListComponent } from './assigments-list/assigments-list.component';
import { ProjectsAssigmentsComponent } from './projects-assigments/projects-assigments.component';
import { EmployeeProjectRowComponent } from './employee-project-row/employee-project-row.component';
import { EmployeeProjectRowSubrowComponent } from './employee-project-row-subrow/employee-project-row-subrow.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material';



@NgModule({
  declarations: [AssigmentsListComponent, ProjectsAssigmentsComponent, EmployeeProjectRowComponent, EmployeeProjectRowSubrowComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    MatSortModule,
    FormsModule
    
  ],
  exports: [
    RouterModule,
    AssigmentsListComponent,
    ProjectsAssigmentsComponent
  ]
})
export class AssigmentsModule { }
