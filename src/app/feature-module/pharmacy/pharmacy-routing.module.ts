import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacyComponent } from './pharmacy.component';

const routes: Routes = [
  {
    path: '',
    component: PharmacyComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'pharmacy-details',
        loadChildren: () =>
          import('./pharmacy-details/pharmacy-details.module').then(
            (m) => m.PharmacyDetailsModule
          ),
      },
      {
        path: 'pharmacy-search',
        loadChildren: () =>
          import('./pharmacy-search/pharmacy-search.module').then(
            (m) => m.PharmacySearchModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'product-desc',
        loadChildren: () =>
          import('./product-desc/product-desc.module').then(
            (m) => m.ProductDescModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('./checkout/checkout.module').then((m) => m.CheckoutModule),
      },
      {
        path: 'success',
        loadChildren: () =>
          import('./success/success.module').then((m) => m.SuccessModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then((m) => m.RegisterModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyRoutingModule {}
