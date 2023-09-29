import { TestBed } from '@angular/core/testing';

import { GuessArtistService } from './guess-artist.service';

describe('GuessArtistService', () => {
  let service: GuessArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuessArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
