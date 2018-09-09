import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDataService } from './services/company-data.service';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  providers: [
    // Http,
    CompanyDataService
  ],
  declarations: []
})
export class CoreModule { }
