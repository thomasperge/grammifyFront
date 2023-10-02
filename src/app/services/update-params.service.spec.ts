import { TestBed } from '@angular/core/testing';

import { UpdateParamsService } from './update-params.service';

describe('UpdateParamsService', () => {
  let service: UpdateParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
