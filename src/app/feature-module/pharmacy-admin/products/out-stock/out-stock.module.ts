import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutStockRoutingModule } from './out-stock-routing.module';
import { OutStockComponent } from './out-stock.component';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    OutStockComponent
  ],
  imports: [
    CommonModule,
    OutStockRoutingModule,
    SharedModule
  ]
})
export class OutStockModule { }
