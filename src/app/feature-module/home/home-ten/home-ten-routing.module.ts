import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTenComponent } from './home-ten.component';

const routes: Routes = [{ path: '', component: HomeTenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTenRoutingModule { }
