import { TestBed, inject } from '@angular/core/testing';

import { CompanyCollectionService } from './company-collection.service';

describe('CompanyCollectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyCollectionService]
    });
  });

  it('should be created', inject([CompanyCollectionService], (service: CompanyCollectionService) => {
    expect(service).toBeTruthy();
  }));
});
