import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PharmacyComponent } from './pharmacy.component';
import { HomeOneModule } from '../home/home-one/home-one.module';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    PharmacyComponent
  ],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    HomeOneModule,
    SharedModule
  ]
})
export class PharmacyModule { }
