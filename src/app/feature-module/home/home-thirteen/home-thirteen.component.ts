import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-thirteen',
  templateUrl: './home-thirteen.component.html',
  styleUrls: ['./home-thirteen.component.css']
})
export class HomeThirteenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  doctorslide = [
    {
      img: 'assets/img/doctors/book-doctor-09.jpg',
      doctor_name: 'Dr. Deborah Angel',
      degree: 'MBBS, MS - General Surgery, MCh',
      price: '$20 - $50',
      rating: '82'
    },
    {
      img: 'assets/img/doctors/book-doctor-10.jpg',
      doctor_name: 'Dr. Darren Elder',
      degree: 'MBBS, MD - General Medicine, DNB',
      price: '$30 - $70',
      rating: '82'
    },
    {
      img: 'assets/img/doctors/book-doctor-11.jpg',
      doctor_name: 'Dr. Sofia Brient',
      degree: 'MBBS, MD - General Medicine, DNB',
      price: '$40 - $80',
      rating: '82'
    },
    {
      img: 'assets/img/doctors/book-doctor-12.jpg',
      doctor_name: 'Dr. Ruby Perrin',
      degree: 'MBBS, MS - General Surgery, MCh',
      price: '$50 - $90',
      rating: '82'
    },
    {
      img: 'assets/img/doctors/book-doctor-11.jpg',
      doctor_name: 'Dr. Sofia Brient',
      degree: 'MBBS, MD - General Medicine, DNB',
      price: '$40 - $80',
      rating: '82'
    },
    {
      img: 'assets/img/doctors/book-doctor-12.jpg',
      doctor_name: 'Dr. Ruby Perrin',
      degree: 'MBBS, MS - General Surgery, MCh',
      price: '$50 - $90',
      rating: '82'
    },
  ]
  clinicslides = [
    {
      img: 'assets/img/clinic/features-clinic-01.jpg',
      name: 'Medical'
    },
    {
      img: 'assets/img/clinic/features-clinic-02.jpg',
      name: 'Patient Ward'
    },
    {
      img: 'assets/img/clinic/features-clinic-03.jpg',
      name: 'Operation'
    },
    {
      img: 'assets/img/clinic/features-clinic-04.jpg',
      name: 'Laboratory'
    },
    {
      img: 'assets/img/clinic/features-clinic-01.jpg',
      name: 'Medical'
    },
  ]
  clinicslidesOptions = {
    loop:true,
			margin:15,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-8',
			navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ], 
			responsive:{
				0:{
					items:1
				},
				500:{
					items:3
				},
				768:{
					items:3
				},
				1000:{
					items:3
				},
				1300:{
					items:3
				}
			}
  }
  slideConfigure = {
    dots: true,
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
  }
}
