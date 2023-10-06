import { TestBed } from '@angular/core/testing';

import { SpellCheckerService } from './spell-checker.service';

describe('SpellCheckerService', () => {
  let service: SpellCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpellCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
