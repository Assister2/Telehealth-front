import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyAdminRoutingModule } from './pharmacy-admin-routing.module';
import { PharmacyAdminComponent } from './pharmacy-admin.component';
import { AdminHeaderComponent } from './common/admin-header/admin-header.component';
import { AdminSideBarComponent } from './common/admin-side-bar/admin-side-bar.component';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    PharmacyAdminComponent,
    AdminHeaderComponent,
    AdminSideBarComponent
  ],
  imports: [
    CommonModule,
    PharmacyAdminRoutingModule,
    SharedModule
  ]
})
export class PharmacyAdminModule { }
