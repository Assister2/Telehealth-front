import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFourRoutingModule } from './home-four-routing.module';
import { HomeFourComponent } from './home-four.component';
import { HomeFourHeaderComponent } from './components/home-four-header/home-four-header.component';
import { HomeFourFooterComponent } from './components/home-four-footer/home-four-footer.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    HomeFourComponent,
    HomeFourHeaderComponent,
    HomeFourFooterComponent,
  ],
  imports: [CommonModule, HomeFourRoutingModule, SharedModule],
})
export class HomeFourModule {}
