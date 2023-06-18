import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {
  username = '';
  phone = '';
  email = '';
  license = '';
  gender = '';
  role = '';
  password = '';
  confirm_password = '';
  address = '';
  speciality = '';
  isPatient: boolean = false;
  isSubmitted : boolean = false;
  speciality_list: any = [];
  doctors: any = [];
  patients: any = [];
  reg_type = 'Patient Register';
  doc_patient = 'Are you a Doctor?';
  value: any;
  constructor(
    private toastr: ToastrService,
    public commonService: CommonService,
    public router: Router
  ) {}
  // registrationForm = this.fb.group({
  //   speciality: ['', [Validators.required]],
  // });

  ngOnInit(): void {
    this.getDoctors();
    this.getSpeciality();
    if($('.floating').length > 0 ){
      $('.floating').on('focus blur',  (e: { type: string; }) => {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
      }).trigger('blur');
    }
  }
  signup() {
    if (this.username === '' || this.phone === '' || this.password === '' || this.email === '' || this.license === '' || this.confirm_password === '') {
      this.toastr.error('', 'Please enter mandatory field!');
    } else {
      if (!this.isPatient) {
        let params = {
          username: this.username,
          email: this.email,
          license: this.license,
          role: 'doctor',
          gender: this.gender,
          speciality: this.speciality,
          phone: this.phone,
          password: this.password,
          confirm_password: this.confirm_password
        };
        this.commonService.createDoctor(params).then((res) => {
          this.toastr.success('', 'Register successfully!');
          this.router.navigate(['/doctor-register-step1']);
        });
      } else {
        let params = {
          username: this.username,
          email: this.email,
          role: 'user',
          gender: this.gender,
          phone: this.phone,
          password: this.password,
          confirm_password: this.confirm_password
        };
        
        
        this.commonService.createPatient(params).then((res) => {
          this.toastr.success('', 'Register successfully!');
          this.router.navigate(['/patient-register-step1']);
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
  getSpeciality(){

    this.commonService.getSpeciality_1().then((res)=>{
      this.speciality_list = res.data;
      // console.log(res)
      // this.speciality_list = [];
      //   for (const item in res) {
      //       console.log(item)
      //       this.speciality_list.push(item);
      //   }
      //   console.log(this.speciality_list)
    })
  }

}
