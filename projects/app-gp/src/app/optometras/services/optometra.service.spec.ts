import { TestBed } from '@angular/core/testing';

import { OptometraService } from './optometra.service';

describe('OptometraService', () => {
  let service: OptometraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptometraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
