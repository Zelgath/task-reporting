import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { ProjectsService } from 'src/app/services/projects.service';



@NgModule({
  declarations: [ProjectsListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [RouterModule],
  providers: [ProjectsService]
})
export class ProjectsModule { }
