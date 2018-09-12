import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader';
import { SharedModule } from './shared/shared.module';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  'bgsColor': '#00ACC1',
  'bgsOpacity': 0.5,
  'bgsPosition': 'bottom-right',
  'bgsSize': 100,
  'bgsType': 'folding-cube',
  'blur': 7,
  'fgsColor': '#d71d4a',
  'fgsPosition': 'center-center',
  'fgsSize': 60,
  'fgsType': 'square-jelly-box',
  'gap': 24,
  'logoPosition': 'center-center',
  'logoSize': 120,
  'logoUrl': '',
  'overlayColor': 'rgba(40,40,40,0.8)',
  'pbColor': '#d71d4a',
  'pbDirection': 'ltr',
  'pbThickness': 3,
  'hasProgressBar': true,
  // 'text': 'Test',
  'textColor': '#FFFFFF',
  'textPosition': 'center-center',
  'threshold': 500
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
