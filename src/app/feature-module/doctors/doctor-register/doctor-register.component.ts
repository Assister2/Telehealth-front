import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup,  FormBuilder,  Validators, FormControl, AbstractControl } from '@angular/forms';
import { CommonService } from 'src/app/core/service/service.index';
import { AuthService } from '../../../core/google/authentication/auth.service';
import Validation from '../../login/validation';
@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    middlename: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    license: new FormControl(''),
    speciality: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  firstname = '';
  middlename = '';
  lastname = '';
  mobile = '';
  email = '';
  license = '';
  gender = '';
  role = '';
  password = '';
  confirmPassword = '';
  address = '';
  speciality = '';
  verify = '';
  verifyShow : boolean = false;
  isVerify : boolean = false;
  isPatient: boolean = false;
  registerForm : FormGroup | undefined;
  submitted : boolean = false;
  speciality_list: any = [];
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
    this.getDoctors();
    this.getSpeciality();
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
      license: ['', [Validators.required]],
      speciality: ['', [Validators.required]],
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
    firstname : ['', [Validators.required]],
    middlename : ['', [Validators.required]],
    lastname : ['', [Validators.required]],
    email : ['', Validators.required],
    mobile : ['', Validators.required],
    license : ['', Validators.required],
    speciality: ['', Validators.required],
    password : ['', Validators.required],
    confirmPassword : ['', Validators.required]
  });
  }
  signup() {
    this.submitted = true;
    if (this.firstname === '' || this.middlename === '' || this.lastname === '' || this.mobile === '' || this.password === '' || this.email === '' || this.license === '' || this.speciality === '' || this.confirmPassword === '') {
      this.toastr.error('', 'Please input form fields!');
    } else {
      let params = {
        firstname: this.firstname,
        middlename: this.middlename,
        lastname: this.lastname,
        email: this.email,
        license: this.license,
        role: 'doctor',
        gender: this.gender,
        speciality: this.speciality,
        phone: this.mobile,
        password: this.password
      };
      if(this.form.invalid)
      {
        this.commonService.createDoctor(params).then((res) => {
          this.verifyShow = true;
        }).catch((error)=>{
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
  changeMale(){
    this.gender = 'male';
  }
  changeFemale(){
    this.gender = 'female';
  }
  verifyCode(): void{
    let code = {
      code : this.verify,
      user : {
        firstname: this.firstname,
        middlename: this.middlename,
        lastname: this.lastname,
        email: this.email,
        license: this.license,
        role: 'doctor',
        gender: this.gender,
        speciality: this.speciality,
        phone: this.mobile,
        password: this.password
      }
    };
    this.commonService.sendCode(code).then((res)=>{
      this.toastr.success('', 'Register successfully!');
      this.router.navigate(['/home']);
    })
    .catch((error)=>{
      this.toastr.error('',error.response.data.errors[0].messages);
      this.verifyShow = false;
      this.submitted = false;
    })
  }
  getSpeciality(){
    this.commonService.getSpeciality_1().then((res)=>{
      this.speciality_list = res.data;
    })
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

}
