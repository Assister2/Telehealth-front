import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentGatewayComponent } from './payment-gateway.component';

const routes: Routes = [{ path: '', component: PaymentGatewayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentGatewayRoutingModule { }
