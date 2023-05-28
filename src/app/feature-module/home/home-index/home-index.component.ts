import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { CommonService } from 'src/app/core/service/service.index';

export interface Doctors {
  id: number;
  doctor_name: string;
  speciality: string;
  Education: string;
  location: string;
}

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.css']
})
export class HomeIndexComponent implements OnInit {
    @ViewChild('slickModal1')
    slickModal1!: SlickCarouselComponent;
    @ViewChild('slickModal2')
    slickModal2!: SlickCarouselComponent;
    @ViewChild('slickModal3')
    slickModal3!: SlickCarouselComponent;
    specialityList: any = [];
    doctors: any = [];
    slidepage: any;
    employeeCtrl = new FormControl();
    filteredEmployee: Observable<Doctors[]>;
    blogs: any = [];
    keyword = 'name';
    searchDoctor = [];
    public countries = [
      {
        id: 1,
        name: 'Albania',
        img: 'image',
      },
      {
        id: 2,
        name: 'Belgium',
      },
      {
        id: 3,
        name: 'Denmark',
      },
      {
        id: 4,
        name: 'Montenegro',
      },
      {
        id: 5,
        name: 'Turkey',
      },
      {
        id: 6,
        name: 'Ukraine',
      },
      {
        id: 7,
        name: 'Macedonia',
      },
      {
        id: 8,
        name: 'Slovenia',
      },
      {
        id: 9,
        name: 'Georgia',
      },
      {
        id: 10,
        name: 'India',
      },
      {
        id: 11,
        name: 'Russia',
      },
      {
        id: 12,
        name: 'Switzerland',
      },
    ];
    constructor(
      public router: Router,
      public commonService: CommonService
    ) {
      this.filteredEmployee = this.employeeCtrl.valueChanges.pipe(
        startWith(''),
        map((employee) =>
          employee ? this._filterEmployees(employee) : this.doctors.slice()
        )
      );
    }
  
    ngOnInit() {
      window.scrollTo(0, 0);
      this.getspeciality();
      this.getDoctors();
      this.getblogs();
  
     
    }
    bannerslides = [
      {
        img: 'assets/img/banner-4.jpg'
      },
      {
        img: 'assets/img/banner-4.jpg'
      },
      {
        img: 'assets/img/banner-4.jpg'
      },
    ]
    doctorslide = [
      {
        img: 'assets/img/doctors/book-doctor-05.jpg',
        speciality: 'assets/img/icons/icon2.svg',
        doctor_name: 'Edward Willey',
        specialist: 'Neurologist Specialist',
        rating: '82'
      },
      {
        img: 'assets/img/doctors/book-doctor-06.jpg',
        speciality: 'assets/img/icons/icon3.svg',
        doctor_name: 'Deborah Angel',
        specialist: 'Cardiology Specialist',
        rating: '82'
      },
      {
        img: 'assets/img/doctors/book-doctor-07.jpg',
        speciality: 'assets/img/icons/icon1.svg',
        doctor_name: 'Merry Anderson',
        specialist: 'Gastrologic Specialist',
        rating: '82'
      },
      {
        img: 'assets/img/doctors/book-doctor-08.jpg',
        speciality: 'assets/img/icons/icon4.svg',
        doctor_name: 'David Blackwell',
        specialist: 'Cosmetic Specialist',
        rating: '82'
      },
      {
        img: 'assets/img/doctors/book-doctor-05.jpg',
        speciality: 'assets/img/icons/icon2.svg',
        doctor_name: 'Edward Willey',
        specialist: 'Neurologist Specialist',
        rating: '82'
      },
    ]
    private _filterEmployees(value: string): Doctors[] {
      const filterValue = value.toLowerCase();
      return this.doctors.filter(
        (state:any) => state.doctor_name.toLowerCase().indexOf(filterValue) === 0
      );
    }
  
    slides = [
      {
        img: 'assets/img/specialities/specialities-05.png',
        msg:
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
        name: 'Dentist',
        position: 'CEO of VoidCoders',
      },
      {
        img: 'assets/img/specialities/specialities-01.png',
        msg:
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
        name: 'Urology',
        position: 'CEO of VoidCoders',
      },
      {
        img: 'assets/img/specialities/specialities-02.png',
        msg:
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
        name: 'Neurology',
        position: 'CEO of VoidCoders',
      },
      {
        img: 'assets/img/specialities/specialities-03.png',
        msg:
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
        name: 'Orthopedic',
        position: 'CEO of VoidCoders',
      },
      {
        img: 'assets/img/specialities/specialities-04.png',
        msg:
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
        name: 'Cardiologist',
        position: 'CEO of VoidCoders',
      },
      {
        img: 'assets/img/specialities/specialities-05.png',
        msg:
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
        name: 'Dentist',
        position: 'CEO of VoidCoders',
      },
      {
        img: 'assets/img/specialities/specialities-01.png',
        msg:
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
        name: 'Urology',
        position: 'CEO of VoidCoders',
      },
      {
        img: 'assets/img/specialities/specialities-05.png',
        msg:
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
        name: 'Dentist',
        position: 'CEO of VoidCoders',
      },
     
      
    ];
    slideConfig = {
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    slideConfig2 = {
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      speed: 500,
      variableWidth: true,
      arrows: false,
      autoplay: false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    slideConfig3 = {
      dots: true,
      arrows: false,
      variableWidth: true
    };
  
    getspeciality() {
      this.commonService.getSpeciality().subscribe((res) => {
        this.specialityList = res;
      });
    }
  
    getDoctors() {
      this.commonService.getDoctors().subscribe((res) => {
        this.doctors = res;
        this.slidepage = {
          slidesToShow: 5,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        };
        this.countries = [];
        this.doctors.forEach((index:any, i:any) => {
          this.countries.push({
            id: index.id,
            name: index.doctor_name,
          });
        });
      });
    }
  
    getblogs() {
      this.commonService.getBlogs().subscribe((res) => {
        this.blogs = res;
      });
    }
  
    selectEvent(item:any) {
      let filter = this.countries.filter((a) => a.name === item.name);
      this.router.navigateByUrl('/patients/doctor-profile?id=' + filter[0].id);
      // do something with selected item
    }
  
    onChangeSearch(search: string) {
      // fetch remote data from here
      // And reassign the 'data' which is binded to 'data' property.
    }
  
    onFocused(e:any) {
      // do something
    }
  
    //// next step 2
    sliderContent = [
      {
        img: 'assets/img/features/feature-01.jpg',
        msg:
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
        name: 'Patient Ward',
        position: 'CEO of VoidCoders',
      },
      {
        img: 'assets/img/features/feature-02.jpg',
        msg:
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
        name: 'Test Room',
        position: 'CEO of VoidCoders',
      },
      {
        img: 'assets/img/features/feature-03.jpg',
        msg:
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
        name: 'ICU',
        position: 'CEO of VoidCoders',
      },
      {
        img: 'assets/img/features/feature-04.jpg',
        msg:
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
        name: 'Laboratory',
        position: 'CEO of VoidCoders',
      },
      {
        img: 'assets/img/features/feature-05.jpg',
        msg:
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
        name: 'Operation',
        position: 'CEO of VoidCoders',
      },
      {
        img: 'assets/img/features/feature-06.jpg',
        msg:
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
        name: 'Medical',
        position: 'CEO of VoidCoders',
      },
      {
        img: 'assets/img/features/feature-05.jpg',
        msg:
          '"Lorem Ipsum is simply dummy text of the printing and typesetting industry."',
        name: 'Patient Ward',
        position: 'CEO of VoidCoders',
      },
    ];
    slideConfigure = {
      dots: false,
      autoplay: false,
      infinite: true,
      variableWidth: true,
    };
    nextslide() {
      this.slickModal2.slickNext();
    }
  
    prevslide() {
      this.slickModal2.slickPrev();
    }
  
    nextpage() {
      this.slickModal3.slickNext();
    }
  
    prevpage() {
      this.slickModal3.slickPrev();
    }
    clinicsOptions = {
      loop:true,
        dots: true,
        nav:true,
        navText: [ '<span>‹</span>', '<span>›</span>' ], 
        responsive:{
          0:{
            items:1
          },
          500:{
            items:1
          },
          768:{
            items:1
          },
          1000:{
            items:1
          },
          1300:{
            items:1
          }
        }
    }
  
  }
  