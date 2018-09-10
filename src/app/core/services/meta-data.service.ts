import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { IActivityType } from '../../shared/interfaces/activity';
import { IIndustry, IProductFundingStatus, IProductType, IProductStage, ILifecycle_Stage } from '../../shared/interfaces/company';
import { IContactType } from '../../shared/interfaces/contact';
import { IRole } from '../../shared/interfaces/user';

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
      const res = response.json();
      return res.map((type: IActivityType) => type);
    }))
    // .catch(this.handleError);
  }

  public getAllIndustries() {
    return this.http
    .get(API_URL + '/industries')
    .pipe(map(response => {
      const items = response.json();
      return items.map((ind: IIndustry) => ind);
    }))
  }

  public getAllProductFundingStatus() {
    return this.http
    .get(API_URL + '/product_funding_status')
    .pipe(map(response => {
      const items = response.json();
      return items.map((ind: IProductFundingStatus) => ind);
    }))
  }

  public getAllProductTypes() {
    return this.http
    .get(API_URL + '/product_type')
    .pipe(map(response => {
      const items = response.json();
      return items.map((ind: IProductType) => ind);
    }))
  }

  public getAllProductStage() {
    return this.http
    .get(API_URL + '/product_stage')
    .pipe(map(response => {
      const items = response.json();
      return items.map((ind: IProductStage) => ind);
    }))
  }

  public getAllContactTypes() {
    return this.http
    .get(API_URL + '/contact_type')
    .pipe(map(response => {
      const items = response.json();
      return items.map((ind: IContactType) => ind);
    }))
  }

  public getAllUserRoles() {
    return this.http
    .get(API_URL + '/user_role')
    .pipe(map(response => {
      const items = response.json();
      return items.map((ind: IRole) => ind);
    }))
  }
  public getAllLifecycleStage() {
    return this.http
    .get(API_URL + '/lifecycle_stage')
    .pipe(map(response => {
      const items = response.json();
      return items.map((ind: ILifecycle_Stage) => ind);
    }))
  }

  

  /*
 
/users 2x
/companies 2x
/contacts 3x
*/
}
