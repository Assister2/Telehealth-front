import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsGatewayRoutingModule } from './sms-gateway-routing.module';
import { SmsGatewayComponent } from './sms-gateway.component';


@NgModule({
  declarations: [
    SmsGatewayComponent
  ],
  imports: [
    CommonModule,
    SmsGatewayRoutingModule
  ]
})
export class SmsGatewayModule { }
