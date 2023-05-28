import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFiveRoutingModule } from './home-five-routing.module';
import { HomeFiveComponent } from './home-five.component';
import { HomeFiveFooterComponent } from './components/home-five-footer/home-five-footer.component';
import { HomeFiveHeaderComponent } from './components/home-five-header/home-five-header.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    HomeFiveComponent,
    HomeFiveFooterComponent,
    HomeFiveHeaderComponent,
  ],
  imports: [CommonModule, HomeFiveRoutingModule, SharedModule],
})
export class HomeFiveModule {}
