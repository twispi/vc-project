import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IProduct } from '../../shared/interfaces/company';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: Http) { }
  public getAllLifecycleStage() {
    return this.http
    .get(API_URL + '/lifecycle_stage')
    .pipe(map(response => {
      const items = response.json();
      return items.map((ind: IProduct) => ind);
    }))
  }
}
