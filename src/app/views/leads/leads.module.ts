import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';

@NgModule({
  imports: [
    CommonModule,
    LeadsRoutingModule
  ],
  declarations: [LeadsComponent],
  exports: [
    LeadsComponent,
  ]
})
export class LeadsModule { }
