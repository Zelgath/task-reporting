import { TestBed } from '@angular/core/testing';

import { ProjectsAssigmentService } from './projects-assigment.service';

describe('ProjectsAssigmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectsAssigmentService = TestBed.get(ProjectsAssigmentService);
    expect(service).toBeTruthy();
  });
});
