import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators, FormControl, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// import {}
import { CommonService } from 'src/app/core/service/service.index';
import Validation from './validation';
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
  // image = new FormData();
  // license = '';
  gender = '';
  // role = '';
  // speciality = '';
  password = '';
  confirmPassword = '';
  // address = '';
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
    public router: Router
  ) {}

  ngOnInit(): void {
    // this.getpatients();
    // this.getDoctors();
    if($('.floating').length > 0 ){
      $('.floating').on('focus blur',  (e: { type: string; }) => {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
      }).trigger('blur');
    }
    this.form = this.formBuilder.group(
      {
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
        confirmassword: [
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
    if (this.username === '' || this.mobile === '' || this.password === '' || this.email === '' || this.confirmPassword === '') {
      this.toastr.error('', 'Please enter mandatory field!');
    } else {
      console.log("mandatory", this.verifyShow, this.isVerify)
      this.submitted = true;
      if (!this.isPatient) {
        // console.log("mandatory")
        // let params = {
        //   username: this.username,
        //   email: this.email,
        //   // license: this.license,
        //   role: 'doctor',
        //   gender: this.gender,
        //   // speciality: this.speciality,
        //   mobile: this.mobile,
        //   password: this.password,
        //   confirmPassword: this.confirmPassword
        // };
        
        // if (this.form.invalid) {
        //   this.verifyShow = true;
        //   this.commonService.createDoctor(params).then((res) => {
        //   this.toastr.success('', 'Register successfully!');
        //   this.router.navigate(['/doctor-register-step1']);
        // });}
      }else {
        console.log("maandatory patient", this.verifyShow, this.isVerify)
        this.verifyShow = true;
        console.log("maandatory patient", this.verifyShow, this.isVerify, this.form)
        let params = {
          username: this.username,
          email: this.email,
          role: 'user',
          gender: this.gender,
          phone: this.mobile,
          password: this.password,
          confirmPassword: this.confirmPassword
        };
        this.submitted = true;
        console.log("data", params)
        if (this.form.invalid){
          this.verifyShow = true;
          console.log("verify", this.verifyShow, this.isVerify)
          this.commonService.createPatient(params).then((res) => {
            this.toastr.success('', 'Register successfully!');
            this.router.navigate(['/patient-register-step1']);
          });
        }
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
