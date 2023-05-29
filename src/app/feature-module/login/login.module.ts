import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { HomeIndexModule } from '../home/home-index/home-index.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, HomeIndexModule,SharedModule],
})
export class LoginModule {}
