import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent implements OnInit {


  @Input() message = '';

  constructor() { }

  ngOnInit() {
  }

}
