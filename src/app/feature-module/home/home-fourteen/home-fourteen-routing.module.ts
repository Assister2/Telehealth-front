import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFourteenComponent } from './home-fourteen.component';

const routes: Routes = [{ path: '', component: HomeFourteenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeFourteenRoutingModule { }
