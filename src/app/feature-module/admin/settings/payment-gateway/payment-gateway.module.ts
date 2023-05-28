import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentGatewayRoutingModule } from './payment-gateway-routing.module';
import { PaymentGatewayComponent } from './payment-gateway.component';


@NgModule({
  declarations: [
    PaymentGatewayComponent
  ],
  imports: [
    CommonModule,
    PaymentGatewayRoutingModule
  ]
})
export class PaymentGatewayModule { }
