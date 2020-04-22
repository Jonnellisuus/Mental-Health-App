import { TestBed } from '@angular/core/testing';

import { OwnSuggestionService } from './own-suggestion.service';

describe('OwnSuggestionService', () => {
  let service: OwnSuggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnSuggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
