import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesProjectsComponent } from './employees-projects/employees-projects.component';
import { StatisticsViewComponent } from './statistics-view/statistics-view.component';
import { EmployeesService } from '../services/employees.service';
import { ProjectsService } from '../services/projects.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared-module/shared.module';
import { MatSortModule, MatDatepickerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [EmployeesProjectsComponent, StatisticsViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    MatSortModule,
    FormsModule,
    MatSortModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSortModule
  ],
  exports: [EmployeesProjectsComponent, StatisticsViewComponent, RouterModule],
  providers: [EmployeesService, ProjectsService]
})
export class StatisticsModule { }
