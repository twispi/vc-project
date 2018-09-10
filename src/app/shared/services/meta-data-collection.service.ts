import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MetaDataService } from '../../core/services/meta-data.service';
import { IActivityType } from '../interfaces/activity';

@Injectable({
  providedIn: 'root'
})
export class MetaDataCollectionService {
  activityTypes$ = new BehaviorSubject<IActivityType>(null);
  constructor(private api: MetaDataService) { }

  getAllActivityTypes(): Observable<any[]> {
    return this.api.getAllActivityTypes();
  }
}
