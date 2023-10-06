import { TestBed } from '@angular/core/testing';

import { TextareaOutputService } from './textarea-output.service';

describe('TextareaOutputService', () => {
  let service: TextareaOutputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextareaOutputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
