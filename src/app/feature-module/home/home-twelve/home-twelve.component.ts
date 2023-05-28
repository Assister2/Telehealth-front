import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-twelve',
  templateUrl: './home-twelve.component.html',
  styleUrls: ['./home-twelve.component.css']
})
export class HomeTwelveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  doctorslides = [
    {
      img: 'assets/img/doctors/book-doctor-09.jpg',
      pricerange: '$20 - $50',
      patientcount: '500',
      doctername: 'Dr. Deborah Angel',
      degree: 'MBBS, MD - General Medicine, DNB',
      rating: '82',
    },
    {
      img: 'assets/img/doctors/book-doctor-10.jpg',
      pricerange: '$30 - $60',
      patientcount: '100',
      doctername: 'Dr. Darren Elder',
      degree: 'MBBS, MS - General Surgery, MCh',
      rating: '82',
    },
    {
      img: 'assets/img/doctors/book-doctor-11.jpg',
      pricerange: '$40 - $70',
      patientcount: '200',
      doctername: 'Dr. Sofia Brient',
      degree: 'MBBS, MD - General Medicine, DNB',
      rating: '82',
    },
    {
      img: 'assets/img/doctors/book-doctor-12.jpg',
      pricerange: '$50 - $80',
      patientcount: '300',
      doctername: 'Dr. Sofia Brient',
      degree: 'MBBS, MS - General Surgery, MCh',
      rating: '82',
    },
    {
      img: 'assets/img/doctors/book-doctor-09.jpg',
      pricerange: '$20 - $50',
      patientcount: '500',
      doctername: 'Dr. Deborah Angel',
      degree: 'MBBS, MD - General Medicine, DNB',
      rating: '82',
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
  blogslides = [
    {
      img: 'assets/img/blog/blog-04.jpg',
      date: '20',
      year: 'Jan 2022',
      header: 'Doccure – Making your clinic painless visit?',
      department: 'Urology',
      thumb: 'assets/img/doctors/doctor-thumb-01.jpg',
      name: 'Dr. Ruby Perrin'
    },
    {
      img: 'assets/img/blog/blog-wrap-02.jpg',
      date: '13',
      year: 'Feb 2022',
      header: 'What are the benefits of Online Doctor Booking?',
      department: 'Surgery',
      thumb: 'assets/img/doctors/doctor-thumb-02.jpg',
      name: 'Dr. Darren Elder'
    },
    {
      img: 'assets/img/blog/blog-wrap-03.jpg',
      date: '05',
      year: 'Mar 2022',
      header: 'Benefits of consulting with an Online Doctor',
      department: 'Cardiology',
      thumb: 'assets/img/doctors/doctor-thumb-03.jpg',
      name: 'Dr. Deborah Angel'
    },
    {
      img: 'assets/img/blog/blog-04.jpg',
      date: '20',
      year: 'Jan 2022',
      header: 'Doccure – Making your clinic painless visit?',
      department: 'Urology',
      thumb: 'assets/img/doctors/doctor-thumb-01.jpg',
      name: 'Dr. Ruby Perrin'
    },
  ]
  blogslidesOptions = {
    loop:true,
			margin:10,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-7',
			navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ], 
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:2
				},
				1000:{
					items:3
				},
				1300:{
					items:3
				}
			}
    }
  clinicslidesOptions = {
    loop:true,
			margin:15,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-6',
			navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ], 
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:2
				},
				1000:{
					items:4
				},
				1300:{
					items:4
				}
			}
  }
  doctorslidesOptions = {
    loop:true,
			margin:15,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-5',
			navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ], 
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:2
				},
				1000:{
					items:4
				},
				1300:{
					items:4
				}
			}
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
