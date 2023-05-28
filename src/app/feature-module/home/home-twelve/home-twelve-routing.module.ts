import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTwelveComponent } from './home-twelve.component';

const routes: Routes = [{ path: '', component: HomeTwelveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTwelveRoutingModule { }
