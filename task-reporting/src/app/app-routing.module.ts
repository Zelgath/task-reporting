import { NgModule } from "@angular/core";
import {RouterModule, Route} from '@angular/router';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { FunctionalitiesListComponent } from './admin/functionalities-list/functionalities-list.component';
import { StatisticsViewComponent } from './statistics/statistics-view/statistics-view.component';
import { AssigmentsListComponent } from './assigments/assigments-list/assigments-list.component';

const APP_ROUTES : Route [] = [
    {path: '', pathMatch: 'full', redirectTo: 'assigments'},
    {path: 'employees', component: <any>EmployeesListComponent},
    {path: 'admin', component: <any>FunctionalitiesListComponent},
    {path: 'statistics', component: <any>StatisticsViewComponent},
    {path: 'assigments', component: <any>AssigmentsListComponent}
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