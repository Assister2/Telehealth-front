import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseComponent,
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('./list/list.module').then((m) => m.ListModule),
      },
      {
        path: 'add',
        loadChildren: () => import('./add/add.module').then((m) => m.AddModule),
      },
      {
        path: 'edit',
        loadChildren: () =>
          import('./edit/edit.module').then((m) => m.EditModule),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./orders/orders.module').then((m) => m.OrdersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseRoutingModule {}
