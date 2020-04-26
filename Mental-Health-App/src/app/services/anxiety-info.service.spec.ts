import { TestBed } from '@angular/core/testing';

import { AnxietyInfoService } from './anxiety-info.service';

describe('AnxietyInfoService', () => {
  let service: AnxietyInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnxietyInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
