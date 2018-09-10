import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDataService } from './services/company-data.service';
import {  HttpModule } from '@angular/http';
import { ActivityDataService } from './services/activity-data.service';
import { AuthService } from './services/auth.service';
import { ContactDataService } from './services/contact-data.service';
import { MetaDataService } from './services/meta-data.service';
import { ProductDataService } from './services/product-data.service';
import { UserDataService } from './services/user-data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  providers: [
    ActivityDataService,
    AuthService,
    ContactDataService,
    MetaDataService,
    ProductDataService,
    UserDataService,
    CompanyDataService,
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class CoreModule { }
