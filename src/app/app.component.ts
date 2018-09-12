import { Component, Inject, OnInit } from '@angular/core';
import { CompanyCollectionService } from './shared/services/company-collection.service';
import { MetaDataCollectionService } from './shared/services/meta-data-collection.service';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  auth = this.authSvc.isAuth();
  title = 'vc';
  constructor(
    @Inject(MetaDataCollectionService) private metaCollSvc: MetaDataCollectionService,
    @Inject(AuthService) private authSvc: AuthService,
    ) {

  }
  ngOnInit() {
    this.authSvc.logout();
    this.metaCollSvc.getAllActivityTypes().subscribe(obs => console.log(obs));
  }
}
