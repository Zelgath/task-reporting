import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';
import { EmployeesService } from './employees/employees.service';
import { CoreModule } from './core-module/core.module';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EmployeesModule,
    CoreModule,
    RouterModule.forRoot([
      { path: 'employees', component: <any>EmployeesListComponent}
    ])
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
