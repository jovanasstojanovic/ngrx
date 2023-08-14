import { TestBed } from '@angular/core/testing';

import { NameSharingService } from './name-sharing.service';

describe('NameSharingService', () => {
  let service: NameSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
