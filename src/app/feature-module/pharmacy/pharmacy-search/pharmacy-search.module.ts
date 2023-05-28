import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacySearchRoutingModule } from './pharmacy-search-routing.module';
import { PharmacySearchComponent } from './pharmacy-search.component';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    PharmacySearchComponent
  ],
  imports: [
    CommonModule,
    PharmacySearchRoutingModule,
    SharedModule
  ]
})
export class PharmacySearchModule { }
