import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProjectRowComponent } from './employee-project-row.component';

describe('EmployeeProjectRowComponent', () => {
  let component: EmployeeProjectRowComponent;
  let fixture: ComponentFixture<EmployeeProjectRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeProjectRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeProjectRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
