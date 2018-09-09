import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCollectionService } from './services/company-collection.service'
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  providers: [CompanyCollectionService,],
  declarations: []
})
export class SharedModule { 
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [CompanyCollectionService],
    }
  }
}
