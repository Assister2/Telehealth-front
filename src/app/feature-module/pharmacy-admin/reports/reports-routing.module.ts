import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      {
        path: 'view',
        loadChildren: () =>
          import('./invoice-view/invoice-view.module').then(
            (m) => m.InvoiceViewModule
          ),
      },
      {
        path: 'list',
        loadChildren: () =>
          import('./invoice-list/invoice-list.module').then(
            (m) => m.InvoiceListModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
