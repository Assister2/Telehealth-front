import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { HomeIndexModule } from '../home/home-index/home-index.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, HomeIndexModule,SharedModule],
})
export class RegisterModule {}
