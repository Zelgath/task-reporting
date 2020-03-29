import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedSidebarAssigmentsComponent } from './nested-sidebar-assigments.component';

describe('NestedSidebarAssigmentsComponent', () => {
  let component: NestedSidebarAssigmentsComponent;
  let fixture: ComponentFixture<NestedSidebarAssigmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedSidebarAssigmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedSidebarAssigmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
