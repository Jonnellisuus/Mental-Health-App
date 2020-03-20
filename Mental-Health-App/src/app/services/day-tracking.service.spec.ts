import { TestBed } from '@angular/core/testing';

import { DayTrackingService } from './day-tracking.service';

describe('DayTrackingService', () => {
  let service: DayTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
