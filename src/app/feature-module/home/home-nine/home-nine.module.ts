import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeNineRoutingModule } from './home-nine-routing.module';
import { HomeNineComponent } from './home-nine.component';
import { HomeNineFooterComponent } from './components/home-nine-footer/home-nine-footer.component';
import { HomeNineHeaderComponent } from './components/home-nine-header/home-nine-header.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    HomeNineComponent,
    HomeNineFooterComponent,
    HomeNineHeaderComponent,
  ],
  imports: [CommonModule, HomeNineRoutingModule, SharedModule],
})
export class HomeNineModule {}
