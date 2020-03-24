import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAssigmentsComponent } from './projects-assigments.component';

describe('ProjectsAssigmentsComponent', () => {
  let component: ProjectsAssigmentsComponent;
  let fixture: ComponentFixture<ProjectsAssigmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsAssigmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsAssigmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
