import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeIndexModule } from '../home/home-index/home-index.module';


@NgModule({
  declarations: [PatientsComponent, SidebarComponent],
  imports: [CommonModule, PatientsRoutingModule, HomeIndexModule,SharedModule],
})
export class PatientsModule {}
