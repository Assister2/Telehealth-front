import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule
  ]
})
export class SalesModule { }
