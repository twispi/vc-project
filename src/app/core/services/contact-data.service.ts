import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  constructor(private http: Http) { }

  public getAllTodos() {
    // will use this.http.get()
    return this.http
    .get(API_URL + '/todos')
    .pipe(map(response => {
      const todos = response.json();
      return todos.map(todo => Object.create(todo));
    }))
    // .catch(this.handleError);
  }
}
