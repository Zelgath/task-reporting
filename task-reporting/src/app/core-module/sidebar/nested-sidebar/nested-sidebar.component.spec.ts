import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedSidebarComponent } from './nested-sidebar.component';

describe('NestedSidebarComponent', () => {
  let component: NestedSidebarComponent;
  let fixture: ComponentFixture<NestedSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
