import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeEightRoutingModule } from './home-eight-routing.module';
import { HomeEightComponent } from './home-eight.component';
import { HomeEightHeaderComponent } from './components/home-eight-header/home-eight-header.component';
import { HomeEightFooterComponent } from './components/home-eight-footer/home-eight-footer.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    HomeEightComponent,
    HomeEightHeaderComponent,
    HomeEightFooterComponent,
  ],
  imports: [CommonModule, HomeEightRoutingModule, SharedModule],
})
export class HomeEightModule {}
