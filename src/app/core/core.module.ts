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
import { ProductsModule } from '../views/products/products.module';
import { LeadsModule } from '../views/leads/leads.module';
import { ContactsModule } from '../views/contacts/contacts.module';
import { CompaniesModule } from '../views/companies/companies.module';
import { DashboardModule } from '../views/dashboard/dashboard.module';

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
  exports:[
    // MatSidenavModule,
  ]
})
export class CoreModule { }
