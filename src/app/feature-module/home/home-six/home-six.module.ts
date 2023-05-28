import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeSixRoutingModule } from './home-six-routing.module';
import { HomeSixComponent } from './home-six.component';
import { HomeSixHeaderComponent } from './components/home-six-header/home-six-header.component';
import { HomeSixFooterComponent } from './components/home-six-footer/home-six-footer.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    HomeSixComponent,
    HomeSixHeaderComponent,
    HomeSixFooterComponent,
  ],
  imports: [CommonModule, HomeSixRoutingModule, SharedModule],
})
export class HomeSixModule {}
