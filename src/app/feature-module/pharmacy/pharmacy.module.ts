import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PharmacyComponent } from './pharmacy.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { HomeIndexModule } from '../home/home-index/home-index.module';


@NgModule({
  declarations: [
    PharmacyComponent
  ],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    SharedModule,
    HomeIndexModule,
  ]
})
export class PharmacyModule { }
