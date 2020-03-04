import { Component, OnInit } from '@angular/core';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from "@angular/material";
import { AppDateAdapter, APP_DATE_FORMATS} from './date.adapter';

@Component({
  selector: 'tr-date-changer',
  templateUrl: './date-changer.component.html',
  styleUrls: ['./date-changer.component.less'],
  providers: [
    {
        provide: DateAdapter, useClass: AppDateAdapter
    },
    {
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
    ]
})
export class DateChangerComponent {


}
