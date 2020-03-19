import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { MatSortModule, MatDatepickerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FunctionalitiesListComponent } from './functionalities-list/functionalities-list.component';
import { ProjectsModule } from './projects/projects.module';
import { ProjectsService } from '../services/projects.service';



@NgModule({
  declarations: [FunctionalitiesListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    MatSortModule,
    FormsModule
  ],
  exports: [FunctionalitiesListComponent, RouterModule, ProjectsModule],
  providers: [ProjectsService]
})
export class AdminModule { }
