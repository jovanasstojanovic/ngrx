import { TestBed } from '@angular/core/testing';

import { ContinueLyricsService } from './continue-lyrics.service';

describe('ContinueLyricsService', () => {
  let service: ContinueLyricsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContinueLyricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
