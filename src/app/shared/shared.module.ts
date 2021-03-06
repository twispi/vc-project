import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCollectionService } from './services/company-collection.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatFormFieldModule, MatLabel, MatFormField, MatHint } from '@angular/material/form-field';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule, MatInput} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import { SharedRoutingModule } from './shared-routing.module';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { AddActivityComponent } from './components/add-activity/add-activity.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddLeadComponent } from './components/add-lead/add-lead.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { ViewCompanyComponent } from './components/view-company/view-company.component';
import { ViewProspectComponent } from './components/view-prospect/view-prospect.component';
import { ViewActivityComponent } from './components/view-activity/view-activity.component';
import { ViewLeadComponent } from './components/view-lead/view-lead.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    CoreModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [CompanyCollectionService, ],
  declarations: [
    LoginComponent,
    MainNavComponent,
    AddContactComponent,
    AddActivityComponent,
    AddCompanyComponent,
    AddLeadComponent,
    ViewLeadComponent,
    ViewContactComponent,
    ViewCompanyComponent,
    ViewProspectComponent,
    ViewActivityComponent
  ],
  exports: [
    MatLabel, MatFormField, MatHint, LoginComponent, MatInput, MainNavComponent,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CoreModule,
    AddContactComponent,
    AddActivityComponent,
    AddCompanyComponent,
    AddLeadComponent,
    ViewLeadComponent,
    ViewContactComponent,
    ViewActivityComponent,
  ],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [CompanyCollectionService, ReactiveFormsModule],
    };
  }
}
