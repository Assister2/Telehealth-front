import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-eleven',
  templateUrl: './home-eleven.component.html',
  styleUrls: ['./home-eleven.component.css']
})
export class HomeElevenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {
      img: 'slider-img-one'
    },
    {
      img: 'slider-img-two'
    },
    {
      img: 'slider-img-three'
    },
    {
      img: 'slider-img-four'
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
  }
  slideConfig = {
    autoplay:false,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true
  }
  ngAfterViewInit() {
    this.loadScript("assets/js/bannerhomethree.js")
  }
  loadScript(js:any) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }

}
