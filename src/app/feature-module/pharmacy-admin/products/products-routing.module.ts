import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: '',
    component: ProductsComponent,
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
        path: 'out-stock',
        loadChildren: () =>
          import('./out-stock/out-stock.module').then((m) => m.OutStockModule),
      },
      {
        path: 'expired',
        loadChildren: () =>
          import('./expired/expired.module').then((m) => m.ExpiredModule),
      },
      {
        path: 'edit',
        loadChildren: () =>
          import('./edit/edit.module').then((m) => m.EditModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
