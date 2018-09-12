import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userName: AbstractControl;
  password: AbstractControl;

  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authSvc: AuthService,
    ) { 

  }

  ngOnInit() {

    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    let creds = this.loginForm.getRawValue();
    console.log(creds);
    console.log(this.router);
    this.router.navigate(['/dashboard']);
    this.authSvc.login(creds.userName, creds.password);
  }

}
