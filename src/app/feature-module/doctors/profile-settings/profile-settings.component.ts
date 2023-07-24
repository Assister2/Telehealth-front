import { Component, EventEmitter, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { FormControl, FormGroup, FormBuilder, FormControlName } from '@angular/forms';
import { CommonService, DoctorService } from 'src/app/core/service/service.index';
import { ToastrService } from 'ngx-toastr';
import { Globals } from 'src/app/globals';

const noop = () => { };
@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  tags: Array<string> = [];
  tagss: any = [];
  removeLastOnBackspace: boolean = false;
  canDeleteTags: boolean = true;
  onMaxTagsReached: EventEmitter<void> = new EventEmitter();
  private onChangeCallback: (_: any) => void = noop;
  maxTags: any;
  ishidden: boolean = false;
  public educationalArray: any = [1];
  public experienceArray: any = [1];
  public awardsArray: any = [1];
  public membershipArray: any = [1];
  public registrationArray: any = [1];

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    phonenumber: new FormControl(''),
    birthday: new FormControl(''),
    bio: new FormControl(''),
    clinicImages: new FormControl('')
  });
  userId = null;
  avatarURL = 'assets/img/doctors/doctor-thumb-02.jpg';
  email = '';
  firstname = '';
  lastname = '';
  phonenumber = '';
  gender: any = '';
  birthday: Date = new Date();
  bio = '';
  clinicName = '';
  clinicAddress = '';

  constructor(
    public commonService: CommonService,
    public DoctorService: DoctorService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      avatar: [null],
      email: [''],
      firstname: [''],
      lastname: [''],
      phonenumber: [''],
      birthday: [''],
      clinicName: [''],
      clinicAddress: [''],
      clinicImages: ['']
    })
    const userinfo = JSON.parse(localStorage.getItem('userinfo') || '{}');
    const userId = userinfo.id;

    this.commonService.getbasicinfo({ id: userId })
      .then(res => {
        this.userId = res.data.user._id;
        this.email = res.data.user.email;
        this.firstname = res.data.user.firstname;
        this.lastname = res.data.user.lastname;
        this.phonenumber = res.data.user.phone;
        this.gender = res.data.user.gender;
        this.birthday = res.data.user.birthday;
        this.avatarURL = "data:image/jpeg;base64," + res.data.images[0].data;
      })
      .catch(error => {

      });
  }

  services = ['Tooth Cleaning'];
  specialization = ['Child Care', 'Dental Care'];
  files: File[] = [];
  clinicImages: File[] = [];

  onFileSelected(event) {
    const file = event.target.files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar')!.updateValueAndValidity()
    // File Preview
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.avatarURL = e.target.result as string;
    }
    reader.readAsDataURL(file)
  }

  onSelect(event: any) {
    if(event.addedFiles && event.addedFiles[0]) {
      const imagesAmount = event.addedFiles.length;
      
    }
    // this.clinicImages.push(event.addedFiles[0]);
    // this.form.patchValue({
    //   clinicImages: 
    // })
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onTagsChanged(event: any) {
    console.log(event);

  }
  removeLastTag(tagInput: HTMLInputElement): void {
    if (!this.removeLastOnBackspace || !this.tags.length) {
      return;
    }

    if (tagInput.value === '') {
      this.removeTag(this.tags[this.tags.length - 1]);
    }
  }
  removeTag(tagToRemove: any): void {
    if (!this.isDeleteable(tagToRemove)) {
      return;
    }
    this.tags = this.tags.filter((tag: any) => tagToRemove !== tag);
    this.tagsChanged('remove', tagToRemove);
  }
  isDeleteable(tag: any) {
    if (typeof tag.deleteable !== "undefined" && !tag.deleteable) {
      return false;
    }
    return this.canDeleteTags;
  }
  private tagsChanged(type: string, tag: any): void {
    this.onChangeCallback(this.tags);
    // this.onTagsChanged.emit({
    //     change: type,
    //     tag: tag
    // });
    if (this.maximumOfTagsReached()) {
      this.onMaxTagsReached.emit();
    }
  }
  maximumOfTagsReached(): boolean {
    return typeof this.maxTags !== 'undefined' && this.tags && this.tags.length >= this.maxTags;
  }
  public addEducation(): void {
    this.educationalArray.push(1)
  }
  public deleteEducation(index: any): void {
    this.educationalArray.splice(index, 1)
  }
  public addExperience(): void {
    this.experienceArray.push(1)
  }
  public deleteExperience(index: any): void {
    this.experienceArray.splice(index, 1)
  }
  public addAwards(): void {
    this.awardsArray.push(1)
  }
  public deleteAwards(index: any): void {
    this.awardsArray.splice(index, 1)
  }
  public addMemberships(): void {
    this.membershipArray.push(1)
  }
  public deleteMemberships(index: any): void {
    this.membershipArray.splice(index, 1)
  }
  public addRegistrations(): void {
    this.registrationArray.push(1)
  }
  public deleteRegistrations(index: any): void {
    this.registrationArray.splice(index, 1)
  }
  pricingOption(event: any) {
    let pricetype = event.target['value']
    if (pricetype == 'price_free') {
      this.ishidden = false
    }
    else (
      this.ishidden = true
    )
  }
  parseDate(dateString: string): Date {
    console.log(1111111, dateString)
    if (dateString) {
      return new Date(dateString);
    }
    return null as any;
  }
  saveProfile() {
    const clinicImages = this.clinicImages;
    console.log('clinicImages', clinicImages)
    this.form.patchValue({
      clinicImages: clinicImages
    })
    this.form.get('clinicImages')?.updateValueAndValidity;
    let data = {
      userId: this.userId,
      formData: this.form.value
    }
    console.log(11111111, data)
    this.DoctorService.saveProfile(data)
      .then(res => {
        this.toastr.success('', 'Saved successfully');
      })
      .catch(error => {

      })
  }
}
