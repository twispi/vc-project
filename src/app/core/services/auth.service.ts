import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth$ = new BehaviorSubject<boolean>(false);

  public isAuth() {
    let obs = this.isAuth$.asObservable();
    return obs;
  }

  private updateAuth(bool: boolean) {
    this.isAuth$.next(bool);
  }
  constructor(
    private router: Router,
  ) {

   }

   login(user: string, password: string) {
    this.updateAuth(true);
   }

   resume() {
    this.updateAuth(true);
    console.log('resume');
   }

   logout() {
     this.updateAuth(false);
   }
}
