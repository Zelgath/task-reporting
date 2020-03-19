import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ProjectsService } from 'src/app/services/projects.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter, MatSortModule, MatDatepickerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MomentUtcDateAdapter } from 'src/app/shared-module/moment-utc-date-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Utilites } from 'src/app/shared-module/utilities';



@NgModule({
  declarations: [ProjectsListComponent],
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
    MatSortModule
  ],
  exports: [RouterModule],
  providers: [ProjectsService, Utilites]
})
export class ProjectsModule { }
