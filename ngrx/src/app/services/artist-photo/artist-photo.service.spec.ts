import { TestBed } from '@angular/core/testing';

import { ArtistPhotoService } from './artist-photo.service';

describe('ArtistPhotoService', () => {
  let service: ArtistPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
