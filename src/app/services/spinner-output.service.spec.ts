import { TestBed } from '@angular/core/testing';

import { SpinnerOutputService } from './spinner-output.service';

describe('SpinnerOutputService', () => {
  let service: SpinnerOutputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerOutputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
