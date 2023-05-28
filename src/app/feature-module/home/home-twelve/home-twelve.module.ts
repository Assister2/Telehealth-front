import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTwelveRoutingModule } from './home-twelve-routing.module';
import { HomeTwelveComponent } from './home-twelve.component';
import { HomeTwelveHeaderComponent } from './components/home-twelve-header/home-twelve-header.component';
import { HomeTwelveFooterComponent } from './components/home-twelve-footer/home-twelve-footer.component';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    HomeTwelveComponent,
    HomeTwelveHeaderComponent,
    HomeTwelveFooterComponent
  ],
  imports: [
    CommonModule,
    HomeTwelveRoutingModule,SharedModule
  ]
})
export class HomeTwelveModule { }
