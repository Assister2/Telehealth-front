import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeIndexRoutingModule } from './home-index-routing.module';
import { HomeIndexComponent } from './home-index.component';
import { HomeIndexFooterComponent } from './components/home-index-footer/home-index-footer.component';
import { HomeIndexHeaderComponent } from './components/home-index-header/home-index-header.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    HomeIndexComponent,
    HomeIndexFooterComponent,
    HomeIndexHeaderComponent,
  ],
  imports: [CommonModule, HomeIndexRoutingModule, SharedModule],
  exports: [HomeIndexHeaderComponent, HomeIndexFooterComponent]
})
export class HomeIndexModule {}
