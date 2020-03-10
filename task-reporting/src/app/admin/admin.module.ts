import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared-module/shared.module';
import { RouterModule } from '@angular/router';
import { MatSortModule, MatDatepickerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FunctionalitiesListComponent } from './functionalities-list/functionalities-list.component';



@NgModule({
  declarations: [FunctionalitiesListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    MatSortModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [FunctionalitiesListComponent, RouterModule]
})
export class AdminModule { }
