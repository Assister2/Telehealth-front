import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutStockComponent } from './out-stock.component';

const routes: Routes = [{ path: '', component: OutStockComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutStockRoutingModule { }
