import { IActivity } from './../../shared/interfaces/activity';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityDataService {
  private _activities$ = new BehaviorSubject<IActivity[]>([]);

  public activities() {
    const obs = this._activities$.asObservable();
    return obs;
  }
  constructor() { }


}
