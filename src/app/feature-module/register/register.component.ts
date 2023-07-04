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
    firstname: new FormControl(''),
    middlename: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    // acceptTerms: new FormControl(false),
  });
  firstname = '';
  middlename = '';
  lastname = '';
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
    this.submitted = false;
    this.form = this.formBuilder.group({
        firstname: [
          '',
          [
            Validators.required,
          ]
        ],
        middlename: [
          '',
          [
            Validators.required,
          ]
        ],
        lastname: [
          '',
          [
            Validators.required,
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
    // this.registerForm = this.formBuilder.group({
    //   firstname : ['', [Validators.required]],
    //   middlename : ['', [Validators.required]],
    //   lastname : ['', [Validators.required]],
    //   email : ['', Validators.required],
    //   mobile : ['', Validators.required],
    //   password : ['', Validators.required],
    //   confirmPassword : ['', Validators.required]
    // });
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
    this.submitted = true;
    if (this.firstname === '' || this.middlename === '' || this.lastname === '' || this.mobile === '' || this.password === '' || this.email === '' || this.confirmPassword === '' || this.gender === '') {
      this.toastr.error('', 'Please input form fields!');
    } else{
      let params = {
        firstname: this.firstname,
        middlename: this.middlename,
        lastname: this.lastname,
        email: this.email,
        role: 'user',
        gender: this.gender,
        phone: this.mobile,
        password: this.password
      };
      if (this.form.invalid){
        this.commonService.createPatient(params).then((res) => {
          this.verifyShow = true;
        })
        .catch((error)=>{
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
        firstname: this.firstname,
        middlename: this.middlename,
        lastname: this.lastname,
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
