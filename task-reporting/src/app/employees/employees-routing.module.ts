import { NgModule } from "@angular/core";
import {RouterModule, Route} from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeResolve } from './employee-resolve.service';

const EMPLOYEES_ROUTES : Route [] = [
    {path: 'employees/:id',
     component: <any>EmployeeDetailsComponent,
    resolve: { employee: EmployeeResolve}
}
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