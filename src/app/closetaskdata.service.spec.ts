import { TestBed } from '@angular/core/testing';

import { ClosetaskdataService } from './closetaskdata.service';

describe('ClosetaskdataService', () => {
  let service: ClosetaskdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClosetaskdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
