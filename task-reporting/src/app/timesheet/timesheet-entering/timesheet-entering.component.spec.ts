import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetEnteringComponent } from './timesheet-entering.component';

describe('TimesheetEnteringComponent', () => {
  let component: TimesheetEnteringComponent;
  let fixture: ComponentFixture<TimesheetEnteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetEnteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetEnteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
