import { TestBed, inject } from '@angular/core/testing';

import { MetaDataCollectionService } from './meta-data-collection.service';

describe('MetaDataCollectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetaDataCollectionService]
    });
  });

  it('should be created', inject([MetaDataCollectionService], (service: MetaDataCollectionService) => {
    expect(service).toBeTruthy();
  }));
});
