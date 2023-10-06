import { TestBed } from '@angular/core/testing';

import { ReformulateService } from './reformulate.service';

describe('ReformulateService', () => {
  let service: ReformulateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReformulateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
