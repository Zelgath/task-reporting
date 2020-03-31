import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssigmentsListComponent } from './assigments-list/assigments-list.component';
import { ProjectsAssigmentsComponent } from './projects-assigments/projects-assigments.component';
import { EmployeeProjectRowComponent } from './employee-project-row/employee-project-row.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSortModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelect, MatSelectModule, MatOptionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [AssigmentsListComponent, ProjectsAssigmentsComponent, EmployeeProjectRowComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    MatSortModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule
    
  ],
  exports: [
    RouterModule,
    AssigmentsListComponent,
    ProjectsAssigmentsComponent
  ]
})
export class AssigmentsModule { }
