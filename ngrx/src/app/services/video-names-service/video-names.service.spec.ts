import { TestBed } from '@angular/core/testing';

import { VideoNamesService } from './video-names.service';

describe('VideoNamesService', () => {
  let service: VideoNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
