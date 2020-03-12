import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetMenuComponent } from './timesheet-menu.component';

describe('TimesheetMenuComponent', () => {
  let component: TimesheetMenuComponent;
  let fixture: ComponentFixture<TimesheetMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
