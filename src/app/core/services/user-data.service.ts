import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IUser } from '../../shared/interfaces/user';
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: Http) {}
    
    public getAllUsers() {
    return this.http
    .get(API_URL + '/users')
    .pipe(map(response => {
      const items = response.json();
      return items.map((ind: IUser) => ind);
    }))
  } 
}
