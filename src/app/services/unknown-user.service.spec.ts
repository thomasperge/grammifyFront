import { TestBed } from '@angular/core/testing';

import { CreateUnknownUserService } from './unknown-user.service';

describe('CreateUnknownUserService', () => {
  let service: CreateUnknownUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateUnknownUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
