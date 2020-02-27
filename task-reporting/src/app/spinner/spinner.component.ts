import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent implements OnInit {

  isActive : boolean;

  @Input() message = '';

  constructor() { }

  ngOnInit() {
  }

}
