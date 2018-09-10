import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userName = new FormControl('');
  password = new FormControl('');


  
  constructor(private fb: FormBuilder) { 
    this.loginForm = this.fb.group(this.userName, this.password);
  }

  ngOnInit() {

  
  }

}
