import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeThirteenRoutingModule } from './home-thirteen-routing.module';
import { HomeThirteenComponent } from './home-thirteen.component';
import { HomeThirteenFooterComponent } from './components/home-thirteen-footer/home-thirteen-footer.component';
import { HomeThirteenHeaderComponent } from './components/home-thirteen-header/home-thirteen-header.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    HomeThirteenComponent,
    HomeThirteenFooterComponent,
    HomeThirteenHeaderComponent,
  ],
  imports: [CommonModule, HomeThirteenRoutingModule, SharedModule],
})
export class HomeThirteenModule {}
