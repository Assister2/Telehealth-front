import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeThirteenComponent } from './home-thirteen.component';

const routes: Routes = [{ path: '', component: HomeThirteenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeThirteenRoutingModule { }
