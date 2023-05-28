import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTenRoutingModule } from './home-ten-routing.module';
import { HomeTenComponent } from './home-ten.component';
import { HomeTenHeaderComponent } from './components/home-ten-header/home-ten-header.component';
import { HomeTenFooterComponent } from './components/home-ten-footer/home-ten-footer.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    HomeTenComponent,
    HomeTenHeaderComponent,
    HomeTenFooterComponent,
  ],
  imports: [CommonModule, HomeTenRoutingModule, SharedModule],
})
export class HomeTenModule {}
