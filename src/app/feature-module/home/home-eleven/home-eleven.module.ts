import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeElevenRoutingModule } from './home-eleven-routing.module';
import { HomeElevenComponent } from './home-eleven.component';
import { HomeElevenFooterComponent } from './components/home-eleven-footer/home-eleven-footer.component';
import { HomeElevenHeaderComponent } from './components/home-eleven-header/home-eleven-header.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    HomeElevenComponent,
    HomeElevenFooterComponent,
    HomeElevenHeaderComponent,
  ],
  imports: [CommonModule, HomeElevenRoutingModule, SharedModule],
})
export class HomeElevenModule {}
