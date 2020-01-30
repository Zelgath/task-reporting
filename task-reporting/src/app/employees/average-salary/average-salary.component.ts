import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr-average-salary',
  templateUrl: './average-salary.component.html',
  styleUrls: ['./average-salary.component.less']
})
export class AverageSalaryComponent {

  @Input() averageSalary : number;
  

}
