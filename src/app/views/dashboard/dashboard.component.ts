import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(@Inject(AuthService) private authSvc: AuthService) { }

  ngOnInit() {
    // this.authSvc.login('a', 'a');
    this.authSvc.resume();
    console.log('run');
  }

}
