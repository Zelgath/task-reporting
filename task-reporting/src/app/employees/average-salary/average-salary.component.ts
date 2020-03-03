import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tr-average-salary',
  templateUrl: './average-salary.component.html',
  styleUrls: ['./average-salary.component.less']
})
export class AverageSalaryComponent {
  @Input() averageSalary : number;
  @Output() shownAverageSalary : EventEmitter<number> = new EventEmitter<number>();
  @Output() hiddenAverageSalary : EventEmitter<any> = new EventEmitter<any>();

  isAverageSalaryActive : boolean = false;

  showAverageSalary() : void {
    this.shownAverageSalary.emit(this.averageSalary);
    this.enableAverageSalary();
  }

  hideAverageSalary() : void {
    this.shownAverageSalary.emit(this.averageSalary);
    this.disableAverageSalary;
  }

  disableAverageSalary () : void {
    this.isAverageSalaryActive = false;
    this.shownAverageSalary.emit(null);
  }

  enableAverageSalary () : void {
    this.isAverageSalaryActive = true;
  }

}
