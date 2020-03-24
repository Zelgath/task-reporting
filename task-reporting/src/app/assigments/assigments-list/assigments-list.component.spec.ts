import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigmentsListComponent } from './assigments-list.component';

describe('AssigmentsListComponent', () => {
  let component: AssigmentsListComponent;
  let fixture: ComponentFixture<AssigmentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigmentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
