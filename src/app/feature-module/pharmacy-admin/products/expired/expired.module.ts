import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpiredRoutingModule } from './expired-routing.module';
import { ExpiredComponent } from './expired.component';


@NgModule({
  declarations: [
    ExpiredComponent
  ],
  imports: [
    CommonModule,
    ExpiredRoutingModule
  ]
})
export class ExpiredModule { }
