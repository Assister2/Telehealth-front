import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmsGatewayComponent } from './sms-gateway.component';

const routes: Routes = [{ path: '', component: SmsGatewayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsGatewayRoutingModule { }
