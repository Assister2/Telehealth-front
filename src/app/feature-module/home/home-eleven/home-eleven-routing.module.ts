import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeElevenComponent } from './home-eleven.component';

const routes: Routes = [{ path: '', component: HomeElevenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeElevenRoutingModule { }
