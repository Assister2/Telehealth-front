import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFourteenRoutingModule } from './home-fourteen-routing.module';
import { HomeFourteenComponent } from './home-fourteen.component';
import { HomeFourteenHeaderComponent } from './components/home-fourteen-header/home-fourteen-header.component';
import { HomeFourteenFooterComponent } from './components/home-fourteen-footer/home-fourteen-footer.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    HomeFourteenComponent,
    HomeFourteenHeaderComponent,
    HomeFourteenFooterComponent,
  ],
  imports: [CommonModule, HomeFourteenRoutingModule, SharedModule],
})
export class HomeFourteenModule {}
