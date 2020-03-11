import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tr-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  isAdminPanelOpened : boolean = false;

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

  closeAdminPanel () : void {
    this.isAdminPanelOpened = false;
  }
}
