import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { IActivityType } from '../../shared/interfaces/activity';

const API_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class MetaDataService {

  constructor(private http: Http) { }

  
  public getAllActivityTypes() {
    // will use this.http.get()
    return this.http
    .get(API_URL + '/activity_types')
    .pipe(map(response => {
      const todos = response.json();
      return todos.map((type: IActivityType) => type);
    }))
    // .catch(this.handleError);
  }
}
