import { NgModule } from "@angular/core";
import {RouterModule, Route} from '@angular/router';
import { ProjectsAssigmentsComponent } from './projects-assigments/projects-assigments.component';
import { CommonModule } from '@angular/common';

const ASSIGMENTS_ROUTES : Route [] = [
   {path : 'assigments/projects', component: <any> ProjectsAssigmentsComponent}
]

@NgModule({
   imports: [RouterModule.forChild(ASSIGMENTS_ROUTES),
      CommonModule
],
   exports: [
       RouterModule
   ],
   declarations: []
})

export class AssigmentsRoutingModule {}