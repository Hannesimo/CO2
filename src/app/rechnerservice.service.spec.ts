import { TestBed } from '@angular/core/testing';

import { RechnerserviceService } from './rechnerservice.service';

describe('RechnerserviceService', () => {
  let service: RechnerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RechnerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
