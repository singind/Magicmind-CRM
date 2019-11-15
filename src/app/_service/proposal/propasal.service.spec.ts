import { TestBed } from '@angular/core/testing';

import { PropasalService } from './propasal.service';

describe('PropasalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropasalService = TestBed.get(PropasalService);
    expect(service).toBeTruthy();
  });
});
