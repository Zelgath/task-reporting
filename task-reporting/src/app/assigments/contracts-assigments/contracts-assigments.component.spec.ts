import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsAssigmentsComponent } from './contracts-assigments.component';

describe('ContractsAssigmentsComponent', () => {
  let component: ContractsAssigmentsComponent;
  let fixture: ComponentFixture<ContractsAssigmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsAssigmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsAssigmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
