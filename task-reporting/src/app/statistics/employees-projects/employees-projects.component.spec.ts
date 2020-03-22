import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesProjectsComponent } from './employees-projects.component';

describe('EmployeesProjectsComponent', () => {
  let component: EmployeesProjectsComponent;
  let fixture: ComponentFixture<EmployeesProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
