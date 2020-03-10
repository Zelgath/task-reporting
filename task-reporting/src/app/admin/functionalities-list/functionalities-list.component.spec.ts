import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalitiesListComponent } from './functionalities-list.component';

describe('FunctionalitiesListComponent', () => {
  let component: FunctionalitiesListComponent;
  let fixture: ComponentFixture<FunctionalitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
