import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tr-average-salary',
  templateUrl: './average-salary.component.html',
  styleUrls: ['./average-salary.component.less']
})
export class AverageSalaryComponent {
  @Input() averageSalary : number;
  @Output() shownAverageSalary : EventEmitter<number> = new EventEmitter<number>();

  isAverageSalaryActive : boolean = true;

  showAverageSalary() : void {
    this.shownAverageSalary.emit(this.averageSalary);
  }

  disableAverageSalary () : void {
    this.isAverageSalaryActive = false;
  }

}
