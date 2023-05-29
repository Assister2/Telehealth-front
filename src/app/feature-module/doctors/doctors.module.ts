import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeIndexModule } from '../home/home-index/home-index.module';
import { HomeIndexHeaderComponent } from '../home/home-index/components/home-index-header/home-index-header.component';
import { HomeIndexFooterComponent } from '../home/home-index/components/home-index-footer/home-index-footer.component';

@NgModule({
  declarations: [DoctorsComponent, SidebarComponent],
  imports: [CommonModule, DoctorsRoutingModule, HomeIndexModule,SharedModule],
  exports: [SidebarComponent, HomeIndexHeaderComponent, HomeIndexFooterComponent]
})
export class DoctorsModule {}
