import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'tr-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  isAdminPanelOpened : boolean = false;
  isAssigmentsPanelOpened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeIsAdminPanelOpened () : void {
    if (this.isAdminPanelOpened) {
      this.isAdminPanelOpened = false;
    } else {
      this.isAdminPanelOpened = true;
    }
  }


  changeIsAssigmentsPanelOpened () : void {
    if (this.isAssigmentsPanelOpened) {
      this.isAssigmentsPanelOpened = false;
    } else {
      this.isAssigmentsPanelOpened = true;
    }
  }

}
