import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeSevenRoutingModule } from './home-seven-routing.module';
import { HomeSevenComponent } from './home-seven.component';
import { HomeSevenFooterComponent } from './components/home-seven-footer/home-seven-footer.component';
import { HomeSevenHeaderComponent } from './components/home-seven-header/home-seven-header.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    HomeSevenComponent,
    HomeSevenFooterComponent,
    HomeSevenHeaderComponent,
  ],
  imports: [CommonModule, HomeSevenRoutingModule, SharedModule],
})
export class HomeSevenModule {}
