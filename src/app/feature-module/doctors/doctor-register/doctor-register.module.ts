import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRegisterRoutingModule } from './doctor-register-routing.module';
import { DoctorRegisterComponent } from './doctor-register.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    DoctorRegisterComponent
  ],
  imports: [
    CommonModule,
    DoctorRegisterRoutingModule,
    SharedModule
  ]
})
export class DoctorRegisterModule { }
