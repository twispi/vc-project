import { TestBed, inject } from '@angular/core/testing';

import { LoadingStateService } from './loading-state.service';

describe('LoadingStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingStateService]
    });
  });

  it('should be created', inject([LoadingStateService], (service: LoadingStateService) => {
    expect(service).toBeTruthy();
  }));
});
