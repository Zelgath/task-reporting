import { NgModule } from "@angular/core";
import {RouterModule, Route} from '@angular/router';

const ASSIGMENTS_ROUTES : Route [] = []

@NgModule({
   imports: [ RouterModule.forChild(ASSIGMENTS_ROUTES)
],
   exports: [
       RouterModule
   ],
   declarations: []
})

export class AssigmentsRoutingModule {}