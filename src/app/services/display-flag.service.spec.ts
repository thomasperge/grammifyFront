import { TestBed } from '@angular/core/testing';

import { DisplayFlagService } from './display-flag.service';

describe('DisplayFlagService', () => {
  let service: DisplayFlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayFlagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
