import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators, FormControl, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/core/service/service.index';
import { GoogleLoginProvider, SocialUser,SocialAuthService } from 'angularx-social-login';
import { AuthService } from '../../core/google/authentication/auth.service';

import Validation from './validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // title = 'Angular Form Validation Tutorial';
  // angForm :  FormGroup = new FormGroup();
  form: FormGroup = new FormGroup({
    // fullname: new FormControl(''),
    // username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    // confirmPassword: new FormControl(''),
    // acceptTerms: new FormControl(false),
  });
  loginForm : FormGroup | undefined;
  socialUser! : SocialUser;
  isLoggedin : boolean = false;

  isPatient: boolean = false;
  doctors: any = [];
  patients: any = [];
  submitted: boolean = false;
  email = '';
  password = '';
  value: any;
  public user: SocialUser = new SocialUser;

  constructor(
    public router: Router,
    public commonService: CommonService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    public authService: AuthService
  ) {
    // this.username = '';
    // this.password = '';
    // this.doctors = [];
    // this.patients = [];
    // this.createForm();
  }

  ngOnInit(): void {
    // this.authService.authState.subscribe(user =>{
    //   this.user = user;
    //   console.log("googling", user)
    // });
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    });
    // this.authService.authState.subscribe((user) => {
    //   this.socialUser = user;
    //   this.isLoggedin = (user != null);
    //   console.log(this.socialUser);
    // });
    
    if($('.floating').length > 0 ){
      $('.floating').on('focus blur',  (e:any) => {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
      }).trigger('blur');
    }
  }
  // loginWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }
  // logOut(): void {
  //   this.authService.signOut();
  // }
  checkType(event:any) {
    this.isPatient = event.target.checked ? true : false;
  }
  login(email:any, password:any){
    let params={
      email : this.email,
      password : this.password
    }
    console.log("22222", params, this.form.invalid)
    this.submitted = true;
    if (this.form.invalid) {
      console.log("22222", params)
      this.commonService.login(params).then((res)=>{
        this.toastr.success('', 'Login successfully!');
        this.router.navigate(['/home']);
      });
    }
    
  }

  getDoctors() {
    this.commonService.getDoctors().subscribe((res) => {
      this.doctors = res;
    });
  }

  getpatients() {
    this.commonService.getpatients().subscribe((res) => {
      this.patients = res;
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  // public signInWithGoogle(): void{
  //   console.log("#@$#$#$")
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //     .then((response)=>{
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
}
