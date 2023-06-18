import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureModuleModule } from './feature-module/feature-module.module';
import { SharedModule } from './shared/module/shared.module';
import { SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig  } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginComponent } from './feature-module/login/login.component';
import { AuthService } from '../app/core/google/authentication/auth.service';
// const config = new SocialAuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider("1001178267386-ehtqgbqbp7bb7gfga8gpb2efv5h4vcn6.apps.googleusercontent.com"),
//   },
// ]);
// const CLIENT_ID = environment.client_Id;
// export function provideConfig() {
//   // return config;
// }
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FeatureModuleModule,
    ReactiveFormsModule,
    SharedModule,
    SocialLoginModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBVgXbkIK-2yMiSyUcSbd3A_oqAG3tH1T0",
      authDomain: "charming-script-390206.firebaseapp.com",
      projectId: "charming-script-390206",
      storageBucket: "charming-script-390206.appspot.com",
      messagingSenderId: "807936915922",
      appId: "1:807936915922:web:1fc7d5badc7dc4fafbb00b",
      measurementId: "G-R6PT90CN0Q"
    }),
    AngularFireAuthModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
