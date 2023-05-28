import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    TransactionComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    SharedModule
  ]
})
export class TransactionModule { }
