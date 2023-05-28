import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTwoRoutingModule } from './home-two-routing.module';
import { HomeTwoComponent } from './home-two.component';
import { HomeTwoHeaderComponent } from './components/home-two-header/home-two-header.component';
import { HomeTwoFooterComponent } from './components/home-two-footer/home-two-footer.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    HomeTwoComponent,
    HomeTwoHeaderComponent,
    HomeTwoFooterComponent,
  ],
  imports: [CommonModule, HomeTwoRoutingModule, SharedModule],
})
export class HomeTwoModule {}
