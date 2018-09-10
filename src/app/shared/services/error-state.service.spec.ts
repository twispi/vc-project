import { TestBed, inject } from '@angular/core/testing';

import { ErrorStateService } from './error-state.service';

describe('ErrorStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorStateService]
    });
  });

  it('should be created', inject([ErrorStateService], (service: ErrorStateService) => {
    expect(service).toBeTruthy();
  }));
});
