import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'general'
  },
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'general',
        loadChildren: () =>
          import('./general/general.module').then((m) => m.GeneralModule),
      },
      {
        path: 'localization',
        loadChildren: () =>
          import('./localization/localization.module').then(
            (m) => m.LocalizationModule
          ),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('./payment/payment.module').then((m) => m.PaymentModule),
      },
      {
        path: 'email',
        loadChildren: () =>
          import('./email/email.module').then((m) => m.EmailModule),
      },
      {
        path: 'social-media',
        loadChildren: () =>
          import('./social-media/social-media.module').then(
            (m) => m.SocialMediaModule
          ),
      },
      {
        path: 'social-links',
        loadChildren: () =>
          import('./social-links/social-links.module').then(
            (m) => m.SocialLinksModule
          ),
      },
      {
        path: 'seo',
        loadChildren: () => import('./seo/seo.module').then((m) => m.SeoModule),
      },
      {
        path: 'others',
        loadChildren: () =>
          import('./others/others.module').then((m) => m.OthersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
