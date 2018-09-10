import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCollectionService } from './services/company-collection.service'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import {MatFormFieldModule, MatLabel, MatFormField, MatHint } from '@angular/material/form-field';
import {MatInputModule, MatInput} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,    
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [CompanyCollectionService, ],
  declarations: [LoginComponent],
  exports: [MatLabel, MatFormField, MatHint, LoginComponent, MatInput],
})
export class SharedModule { 
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [CompanyCollectionService, ReactiveFormsModule],
    }
  }
}
