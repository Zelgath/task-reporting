import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProjectRowSubrowComponent } from './employee-project-row-subrow.component';

describe('EmployeeProjectRowSubrowComponent', () => {
  let component: EmployeeProjectRowSubrowComponent;
  let fixture: ComponentFixture<EmployeeProjectRowSubrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeProjectRowSubrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeProjectRowSubrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
