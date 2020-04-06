import { NgModule } from "@angular/core";
import {RouterModule, Route} from '@angular/router';
import { ProjectsAssigmentsComponent } from './projects-assigments/projects-assigments.component';
import { CommonModule } from '@angular/common';
import { ContractsAssigmentsComponent } from './contracts-assigments/contracts-assigments.component';

const ASSIGMENTS_ROUTES : Route [] = [
   {path : 'assigments/projects', component: <any> ProjectsAssigmentsComponent},
   {path: 'assigments/contracts', component: <any> ContractsAssigmentsComponent}
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