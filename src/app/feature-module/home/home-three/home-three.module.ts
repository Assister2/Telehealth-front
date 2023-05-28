import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeThreeRoutingModule } from './home-three-routing.module';
import { HomeThreeComponent } from './home-three.component';
import { HomeThreeFooterComponent } from './components/home-three-footer/home-three-footer.component';
import { HomeThreeHeaderComponent } from './components/home-three-header/home-three-header.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    HomeThreeComponent,
    HomeThreeFooterComponent,
    HomeThreeHeaderComponent,
  ],
  imports: [CommonModule, HomeThreeRoutingModule, SharedModule],
})
export class HomeThreeModule {}
