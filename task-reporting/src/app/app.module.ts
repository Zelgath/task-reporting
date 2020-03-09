import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';
import { EmployeesService } from './employees/employees.service';
import { CoreModule } from './core-module/core.module';
import { AppRoutingModule } from './app-routing.module';
import { EmployeesRoutingModule } from './employees/employees-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MomentUtcDateAdapter } from './shared-module/moment-utc-date-adapter';


 


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
    AppRoutingModule,
    EmployeesRoutingModule,
    NoopAnimationsModule,
    MatSortModule
  ],
  providers: [EmployeesService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentUtcDateAdapter }],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
