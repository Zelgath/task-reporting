import { NgModule } from "@angular/core";
import {RouterModule, Route} from '@angular/router';
import { CommonModule } from '@angular/common';

const STATISTICS_ROUTES : Route [] = [
    
]

@NgModule({
   imports: [ RouterModule.forChild(STATISTICS_ROUTES),
      CommonModule
],
   exports: [
       RouterModule
   ],
   declarations: []
})

export class StatisticsRoutingModule {}