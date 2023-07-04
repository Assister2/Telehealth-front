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
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
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

  }

  ngOnInit(): void {
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

    
    if($('.floating').length > 0 ){
      $('.floating').on('focus blur',  (e:any) => {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
      }).trigger('blur');
    }
  }
  checkType(event:any) {
    this.isPatient = event.target.checked ? true : false;
  }
  login(email:any, password:any){
    this.submitted = true;
    if(this.email === '' || this.password === '') {
      this.toastr.error('', 'Please input form fields!');
    } else {
      let params={
        email : this.email,
        password : this.password
      }
      if (this.form.invalid){
        this.commonService.login(params).then((res)=>{
          this.toastr.success('', 'Login successfully!');
          if(res.data.user.role == 'user'){
            this.router.navigate(['/home-index']);
          }
          else{
            this.router.navigate(['/home']);
          }
        })
        .catch((error)=>{
          this.toastr.error('',error.response.data.message);
        });;
      }
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
}
