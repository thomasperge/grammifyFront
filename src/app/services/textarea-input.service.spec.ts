import { TestBed } from '@angular/core/testing';

import { TextareaInputService } from './textarea-input.service';

describe('TextareaInputService', () => {
  let service: TextareaInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextareaInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
