import { Component, OnInit, ViewEncapsulation, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { CommonService } from 'src/app/core/service/service.index';
declare const $: any;
export interface Doctors {
  id: number;
  doctor_name: string;
  speciality: string;
  Education: string;
  location: string;
}

@Component({
  selector: 'app-home-ten',
  templateUrl: './home-ten.component.html',
  styleUrls: ['./home-ten.component.css']
})
export class HomeTenComponent implements OnInit {
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

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getspeciality();
    this.getDoctors();
    this.getblogs();

    // User's voice slider
    $('.testi-slider').each( () => {
      var $show = $(this).data('show');
      var $arr = $(this).data('arrow');
      var $dots = !$arr;
      var $m_show = $show;
      if ($show == 3) $m_show = $show - 1;
      $(this).slick({
        slidesToShow: $show,
        slidesToScroll: 1,
        arrows: $arr,
        autoplay: false,
        autoplaySpeed: 6000,
        adaptiveHeight: true,
        prevArrow:
          '<button type="button" class="prev-nav"><i class="icon ion-ios-arrow-back"></i></button>',
        nextArrow:
          '<button type="button" class="next-nav"><i class="icon ion-ios-arrow-forward"></i></button>',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: $m_show,
              slidesToScroll: 1,
              infinite: true,
              arrows: $arr,
              dots: $dots,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
            },
          },
        ],
      });
    });
  }
  private _filterEmployees(value: string): Doctors[] {
    const filterValue = value.toLowerCase();
    return this.doctors.filter(
      (state:any) => state.doctor_name.toLowerCase().indexOf(filterValue) === 0
    );
  }
  doctorslide = [
    {
      img: 'assets/img/doctors/book-doctor-01.jpg',
      speciality: 'assets/img/icons/icon2.svg',
      doctor_name: 'Edward Willey',
      specialist: 'Neurologist Specialist',
      rating: '82',
      id: '1'
    },
    {
      img: 'assets/img/doctors/book-doctor-02.jpg',
      speciality: 'assets/img/icons/icon3.svg',
      doctor_name: 'Deborah Angel',
      specialist: 'Cardiology Specialist',
      rating: '82',
      id: '2'
    },
    {
      img: 'assets/img/doctors/book-doctor-03.jpg',
      speciality: 'assets/img/icons/icon1.svg',
      doctor_name: 'Merry Anderson',
      specialist: 'Gastrologic Specialist',
      rating: '82',
      id: '3'
    },
    {
      img: 'assets/img/doctors/book-doctor-04.jpg',
      speciality: 'assets/img/icons/icon4.svg',
      doctor_name: 'David Blackwell',
      specialist: 'Dental Specialist',
      rating: '82',
      id: '4'
    },
    {
      img: 'assets/img/doctors/book-doctor-01.jpg',
      speciality: 'assets/img/icons/icon2.svg',
      doctor_name: 'Edward Willey',
      specialist: 'Dermatologist',
      rating: '82',
      id: '5'
    },
  ]
  slides = [
    {
      img: 'assets/img/services/features-01.svg',
      name: 'Operation',
    },
    {
      img: 'assets/img/services/features-02.svg',
      name: 'Medical',
    },
    {
      img: 'assets/img/services/features-03.svg',
      name: 'Patient Ward',
    },
    {
      img: 'assets/img/services/features-04.svg',
      name: 'Laboratory',
    },
    {
      img: 'assets/img/services/features-01.svg',
      name: 'Operation',
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
    dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 1199,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 860,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
  };

  next() {
    this.slickModal1.slickNext();
  }

  prev() {
    this.slickModal1.slickPrev();
  }

  getspeciality() {
    this.commonService.getSpeciality().subscribe((res) => {
      this.specialityList = res;
    });
  }
  searchdoctor() {
    this.router.navigate(['/patients/search-doctor']);
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
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
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
}
