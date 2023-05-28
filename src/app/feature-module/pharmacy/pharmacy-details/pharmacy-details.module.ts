import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyDetailsRoutingModule } from './pharmacy-details-routing.module';
import { PharmacyDetailsComponent } from './pharmacy-details.component';


@NgModule({
  declarations: [
    PharmacyDetailsComponent
  ],
  imports: [
    CommonModule,
    PharmacyDetailsRoutingModule
  ]
})
export class PharmacyDetailsModule { }
