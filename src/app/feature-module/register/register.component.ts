import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators, FormControl, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/core/service/service.index';
import Validation from './validation';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { AuthService } from '../../core/google/authentication/auth.service';
// import { fileURLToPath } from 'url';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    // fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    // acceptTerms: new FormControl(false),
  });
  username = '';
  mobile = '';
  email = '';
  verify = '';
  verifyShow : boolean = false;
  isVerify : boolean = false;
  gender = '';
  password = '';
  confirmPassword = '';
  registerForm : FormGroup | undefined;
  submitted: boolean = false;
  isPatient: boolean = true;
  doctors: any = [];
  patients: any = [];
  reg_type = 'Patient Register';
  doc_patient = 'Are you a Doctor?';
  value: any;
  constructor(
    private toastr: ToastrService,
    public commonService: CommonService,
    private formBuilder: FormBuilder,
    public router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    if($('.floating').length > 0 ){
      $('.floating').on('focus blur',  (e: { type: string; }) => {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
      }).trigger('blur');
    }
    this.form = this.formBuilder.group({
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: [
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
    this.registerForm = this.formBuilder.group({
      username : ['', [Validators.required]],
      email : ['', Validators.required],
      mobile : ['', Validators.required],
      password : ['', Validators.required],
      confirmPassword : ['', Validators.required]
    });
  }

  changeRegType() {
    if (this.reg_type === 'Doctor Register') {
      this.reg_type = 'Patient Register';
      this.doc_patient = 'Are you a Doctor?';
      this.isPatient = true;
    } else {
      this.reg_type = 'Doctor Register';
      this.doc_patient = 'Not a Doctor?';
      this.isPatient = false;
    }
  }

  signup() {
    if (this.username === '' || this.mobile === '' || this.password === '' || this.email === '' || this.confirmPassword === '' || this.gender === '') {
      this.toastr.error('', 'Please enter mandatory field!');
    }else{
      this.submitted = true;
      let params = {
        username: this.username,
        email: this.email,
        role: 'user',
        gender: this.gender,
        phone: this.mobile,
        password: this.password
      };
      if (this.form.invalid){
        this.commonService.createPatient(params).then((res) => {
          // this.toastr.success('', 'Register successfully!');
          // this.router.navigate(['/patient-register-step1']);
          this.verifyShow = true;
        })
        .catch((error)=>{
          console.log(error)
          this.toastr.error('',error.response.data.errors[0].messages);
        });
      }
    }
  }

  getDoctors() {
    this.commonService.getDoctors().subscribe((res) => {
      this.doctors = res;
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  checkType(event:any) {
    if (event.target.checked) {
      this.gender = event.target.value;
    } else {
      this.gender = "";
    }
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  verifyCode(): void{
    let code = {
      code : this.verify,
      user : {
        username: this.username,
        email: this.email,
        role: 'user',
        gender: this.gender,
        phone: this.mobile,
        password: this.password
      }
    };
    this.commonService.sendCode(code).then((res)=>{
      this.toastr.success('', 'Register successfully!');
      this.router.navigate(['/home-index']);
    })
    .catch((error)=>{
      console.log(error)
      this.toastr.error('',error.response.data.errors[0].messages);
      this.verifyShow = false;
      this.submitted = false;
    })
  }
  changeMale(){
    this.gender = 'male';
  }
  changeFemale(){
    this.gender = 'female';
  }
  getpatients() {
    this.commonService.getpatients().subscribe((res) => {
      this.patients = res;
    });
  }
    
}
