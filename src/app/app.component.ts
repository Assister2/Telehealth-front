import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewEncapsulation,
  AfterViewChecked,
  ViewChild,
} from '@angular/core';
import {
  Event,
  NavigationStart,
  Router,
  ActivatedRoute,
  NavigationEnd,
} from '@angular/router';
import { Location } from '@angular/common';

import { AttributeService, CommonService } from './core/service/service.index';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'doccure';
  url: any;
  
  constructor(
    private activeRoute: ActivatedRoute,
    public router: Router,
    location: Location,
    public commonServic: CommonService,
    public attributeService: AttributeService

  ) {}

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  ngOnInit() {   
    const token = localStorage.getItem('accessToken') || '';
    // Content div min height set
    if (this.tokenExpired(token)) {
      this.router.navigate(['/login']);
    } 
    function resizeInnerDiv() {
      var height: any = $(window).height();
      var header_height: any = $(".header").height();
      var footer_height: any = $(".footer").height();
      var setheight = height - header_height;
      var trueheight = setheight - footer_height;
      $(".content").css("min-height", trueheight);
    }

    $(window).resize(function () {
      if ($('.content').length > 0) {
        resizeInnerDiv();
      }
    });
    if ($('.content').length > 0) {
      resizeInnerDiv();
    }
    window.dispatchEvent(new Event('resize'))
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        $('html').removeClass('menu-opened');
        $('.sidebar-overlay').removeClass('opened');
        $('.main-wrapper').removeClass('slide-nav');
      }
    });
    this.attributeService.usersideMenuresponsive()
    Globals.axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
  }

  ngAfterViewChecked() {
    
  }

  ngOnChanges() {

  }
}
