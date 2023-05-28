import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDescRoutingModule } from './product-desc-routing.module';
import { ProductDescComponent } from './product-desc.component';


@NgModule({
  declarations: [
    ProductDescComponent
  ],
  imports: [
    CommonModule,
    ProductDescRoutingModule
  ]
})
export class ProductDescModule { }
