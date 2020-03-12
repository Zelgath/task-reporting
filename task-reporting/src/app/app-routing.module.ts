import { NgModule } from "@angular/core";
import {RouterModule, Route} from '@angular/router';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { FunctionalitiesListComponent } from './admin/functionalities-list/functionalities-list.component';

const APP_ROUTES : Route [] = [
    {path: '', pathMatch: 'full', redirectTo: 'employees'},
    {path: 'employees', component: <any>EmployeesListComponent},
    {path: 'admin', component: <any>FunctionalitiesListComponent}
]

@NgModule({
   imports: [ RouterModule.forRoot(APP_ROUTES)
],
   exports: [
       RouterModule
   ],
   declarations: []
})

export class AppRoutingModule {}