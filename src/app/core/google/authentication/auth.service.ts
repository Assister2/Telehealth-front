import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private toastr: ToastrService,
    public router: Router,
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) {}
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: GoogleAuthProvider | firebase.auth.AuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result: any) => {

        localStorage.setItem("displayName", result.user?.displayName);
        localStorage.setItem("email", result.user?.email);
        this.toastr.success('', 'You have been successfully logged in!');
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}