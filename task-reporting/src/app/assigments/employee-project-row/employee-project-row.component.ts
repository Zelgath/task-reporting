import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'tr-employee-project-row',
  templateUrl: './employee-project-row.component.html',
  styleUrls: ['./employee-project-row.component.less']
})
export class EmployeeProjectRowComponent implements OnInit {

  @Input() employee : Employee;
 
  constructor() { }

  ngOnInit() {
  }

 

}
