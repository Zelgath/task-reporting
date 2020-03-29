import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NestedSidebarComponent } from './sidebar/nested-sidebar/nested-sidebar.component';
import { NestedSidebarAssigmentsComponent } from './sidebar/nested-sidebar-assigments/nested-sidebar-assigments.component';




@NgModule({
  declarations: [SidebarComponent, NestedSidebarComponent, NestedSidebarAssigmentsComponent],
  exports: [SidebarComponent, NestedSidebarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
