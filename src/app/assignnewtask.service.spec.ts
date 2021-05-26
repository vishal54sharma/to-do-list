import { TestBed } from '@angular/core/testing';

import { AssignnewtaskService } from './assignnewtask.service';

describe('AssignnewtaskService', () => {
  let service: AssignnewtaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignnewtaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
