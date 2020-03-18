import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { ProjectsListComponent } from '../projects/projects-list/projects-list.component';
import { RouterModule } from '@angular/router';

const ADMIN_ROUTES : Route [] = [
  {path: 'admin/projects', 
   component: <any>ProjectsListComponent
}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(ADMIN_ROUTES),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
