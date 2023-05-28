import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home-one/home-one.module').then((m) => m.HomeOneModule),
      },

      {
        path: 'home-two',
        loadChildren: () =>
          import('./home-two/home-two.module').then((m) => m.HomeTwoModule),
      },
      {
        path: 'home-three',
        loadChildren: () =>
          import('./home-three/home-three.module').then(
            (m) => m.HomeThreeModule
          ),
      },
      {
        path: 'home-four',
        loadChildren: () =>
          import('./home-four/home-four.module').then((m) => m.HomeFourModule),
      },
      {
        path: 'home-five',
        loadChildren: () =>
          import('./home-five/home-five.module').then((m) => m.HomeFiveModule),
      },
      {
        path: 'home-six',
        loadChildren: () =>
          import('./home-six/home-six.module').then((m) => m.HomeSixModule),
      },
      {
        path: 'home-seven',
        loadChildren: () =>
          import('./home-seven/home-seven.module').then(
            (m) => m.HomeSevenModule
          ),
      },
      {
        path: 'home-eight',
        loadChildren: () =>
          import('./home-eight/home-eight.module').then(
            (m) => m.HomeEightModule
          ),
      },
      {
        path: 'home-nine',
        loadChildren: () =>
          import('./home-nine/home-nine.module').then((m) => m.HomeNineModule),
      },
      {
        path: 'home-ten',
        loadChildren: () =>
          import('./home-ten/home-ten.module').then((m) => m.HomeTenModule),
      },
      {
        path: 'home-eleven',
        loadChildren: () =>
          import('./home-eleven/home-eleven.module').then(
            (m) => m.HomeElevenModule
          ),
      },
      {
        path: 'home-twelve',
        loadChildren: () =>
          import('./home-twelve/home-twelve.module').then(
            (m) => m.HomeTwelveModule
          ),
      },
      {
        path: 'home-thirteen',
        loadChildren: () =>
          import('./home-thirteen/home-thirteen.module').then(
            (m) => m.HomeThirteenModule
          ),
      },
      {
        path: 'home-fourteen',
        loadChildren: () =>
          import('./home-fourteen/home-fourteen.module').then(
            (m) => m.HomeFourteenModule
          ),
      },
      {
        path: 'home-index',
        loadChildren: () =>
          import('./home-index/home-index.module').then(
            (m) => m.HomeIndexModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
