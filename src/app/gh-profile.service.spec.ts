import { TestBed } from '@angular/core/testing';

import { GhProfileService } from './gh-profile.service';

describe('GhProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GhProfileService = TestBed.get(GhProfileService);
    expect(service).toBeTruthy();
  });
});
