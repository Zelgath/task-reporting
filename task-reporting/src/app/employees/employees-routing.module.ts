import { NgModule } from "@angular/core";
import {RouterModule, Route} from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const EMPLOYEES_ROUTES : Route [] = [
    {path: 'employees/:id', component: <any>EmployeeDetailsComponent}
]

@NgModule({
   imports: [ RouterModule.forChild(EMPLOYEES_ROUTES)
],
   exports: [
       RouterModule
   ],
   declarations: []
})

export class EmployeesRoutingModule {}