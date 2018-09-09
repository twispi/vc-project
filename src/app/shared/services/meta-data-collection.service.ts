import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MetaDataService } from '../../core/services/meta-data.service';

@Injectable({
  providedIn: 'root'
})
export class MetaDataCollectionService {

  constructor(private api: MetaDataService) { }

  getAllActivityTypes(): Observable<any[]> {
    return this.api.getAllActivityTypes();
  }
}
