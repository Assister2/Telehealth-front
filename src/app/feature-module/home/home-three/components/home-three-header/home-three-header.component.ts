import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
} from '@angular/core';
import {
  Event,
  NavigationStart,
  Router,
  ActivatedRoute,
  NavigationEnd,
} from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { CommonService } from 'src/app/core/service/service.index';
declare const $: any;
import * as AOS from 'aos';

@Component({
  selector: 'app-home-three-header',
  templateUrl: './home-three-header.component.html',
  styleUrls: ['./home-three-header.component.css']
})
export class HomeThreeHeaderComponent implements OnInit {
  auth: boolean = false;
  comrytmenu: boolean = true;
  isPatient: boolean = false;
  comlogo: boolean = true;
  whitelogo: boolean = false;
  pharmcart: boolean = false;
  page:any;
  splitVal:any;
  headerTop: boolean = false;
  admin_submenu: boolean = true;
  admin_menu: boolean = false;

  base:any;
  url1:any;
  // $menuItem!: JQuery<HTMLElement>;
  constructor(
    public router: Router,
    private activeRoute: ActivatedRoute,
    public commonService: CommonService
  ) { 
    router.events.subscribe((event: Event) => {
    if (event instanceof NavigationStart) {
      var res = event.url.split('/');
      this.base = res[1];
      this.page = res[2];
      if (event.url == '/pharmacy/cart') {
        this.pharmcart = true;
      } else {
        this.pharmcart = false;
      }
      if (event.url == '/home' || event.url == '/doctors/doctor-register' || event.url == '/register' || this.base === 'pharmacy' || event.url == '/patients/component' || event.url == 'blank' || event.url == '/login-page' || event.url == '/forgot-password' || event.url == '/blank'){
        this.auth = false;
      } 
      else{
        this.auth = true;
      } 
      if (this.base === 'doctor'){
        this.isPatient = false;
      } 
      else if (this.base === 'patients'){
        this.isPatient = true;
      } 
      if (event.url == '/home-two'){
        this.admin_submenu = false;
        this.admin_menu = true;
        this.auth = false;
      }else if (event.url == '/home-slider-one'){
        this.admin_submenu = false;
        this.admin_menu = true;
        this.auth = false;
      }
      else if (event.url == '/home-five'){
        this.admin_submenu = false;
        this.admin_menu = true;
        this.auth = false;
      }else {
        this.admin_submenu = true;
        this.admin_menu = false;
      }
    }
  });
  this.url1 = this.router.url;
  this.commonService.message.subscribe((res) => {
    if (res === 'patientLogin') {
      this.auth = true;
      console.log("result",res)
      // this.isPatient = true;
    }
    if (res === 'doctorLogin') {
      this.auth = true;
      // this.isPatient = false;
    }

    if (res === 'logout') {
      this.auth = false;
      this.isPatient = false;
    }
  });
}

ngOnInit(): void {

  AOS.init({
    duration: 1200,
    once: true,
  });
  
  if (localStorage.getItem('auth') === 'true') {
    this.auth = true;
    this.isPatient =
      localStorage.getItem('patient') === 'true' ? true : false;
  }
  this.router.events.subscribe((event: Event) => {
    if (event instanceof NavigationEnd) {
      $('html').removeClass('menu-opened');
      $('.sidebar-overlay').removeClass('opened');
      $('.main-wrapper').removeClass('slide-nav');
    }
  });
  
      $(window).scroll(function(){
      var scroll = window.pageYOffset;
        if (scroll > 95) {
        $(".header-trans").css("background" , "#FFFFFF");
        }

        else{
          $(".header-trans").css("background" , "transparent");  	
        }
        if (scroll > 95) {
          $(".header-trans.custom").css("background" , "#2b6ccb");
          }
  
          else{
            $(".header-trans.custom").css("background" , "transparent");  	
          }
      })
}

ngAfterViewInit() {
  this.loadDynmicallyScript('assets/js/script.js');
}
loadDynmicallyScript(js:any) {
  var script = document.createElement('script');
  script.src = js;
  script.async = false;
  document.head.appendChild(script);
  script.onload = () => this.doSomethingWhenScriptIsLoaded();
}
doSomethingWhenScriptIsLoaded() {}
change(name:any) {
  this.page = name;
  this.commonService.nextmessage('main');
}

mapGrid() {
  this.router.navigate(['/map-grid']);
}

mapList() {
  this.router.navigate(['/map-list']);
}

addStyle(val:any) {
}

doctor(name:any) {
  this.page = name;
  // this.router.navigate(['/doctors/dashboard']);
}

logout() {
  localStorage.clear();
  this.auth = false;
  this.isPatient = false;
  this.router.navigate(['/login']);
}

home() {
  this.commonService.nextmessage('main');
  this.router.navigateByUrl('/').then(() => {
    this.router.navigate(['/']);
  });
}

navigate(name:any) {
  this.page = name;
  if (name === 'Admin') {
    this.router.navigate(['/admin']);
    this.commonService.nextmessage('admin');
  } else if (name === 'Pharmacy Admin') {
    this.router.navigate(['/pharmacy-admin']);
    this.commonService.nextmessage('pharmacy-admin');
  }
}
}
