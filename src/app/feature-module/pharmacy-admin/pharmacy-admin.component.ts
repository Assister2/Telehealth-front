import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  Event,
  NavigationStart,
  Router,
  ActivatedRoute
} from '@angular/router';
import { CommonService } from 'src/app/core/service/service.index';
3

@Component({
  selector: 'app-pharmacy-admin',
  templateUrl: './pharmacy-admin.component.html',
  styleUrls: ['./pharmacy-admin.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class PharmacyAdminComponent implements OnInit {
  adminShow: boolean = true;
  constructor(
    public commonService: CommonService,
    private route: ActivatedRoute,
    public Router: Router
  ) {
    Router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (
          event.url === '/admin/forgot-pass' ||
          event.url === '/admin/lock-screen' ||
          event.url === '/admin/login-form' ||
          event.url === '/admin/register' ||
          event.url === '/admin/error-first' ||
          event.url === '/admin/error-second'
        ) {
          this.adminShow = false;
        } else {
          this.adminShow = true;
        }
      }
    });
  }
  ngOnInit(): void {
    this.commonService.nextmessage('pharmacy-admin');
     // DarkMode with LocalStorage
	if($('#dark-mode-toggle').length > 0) {
		$("#dark-mode-toggle").children("i:first").addClass("active");
		let darkMode = localStorage.getItem('darkMode'); 
		
		const darkModeToggle:any = document.querySelector('#dark-mode-toggle');
		
		const enableDarkMode = () => {
			document.body.classList.add('darkmode');
			$("#dark-mode-toggle").children("i:last").addClass("active");
			$("#dark-mode-toggle").children("i:first").removeClass("active");
			localStorage.setItem('darkMode', 'enabled');
		}

		const disableDarkMode = () => {
		  document.body.classList.remove('darkmode');
			$("#dark-mode-toggle").children("i:last").removeClass("active");
			$("#dark-mode-toggle").children("i:first").addClass("active");
		  localStorage.setItem('darkMode', '');
		}
		 
		if (darkMode === 'enabled') {
			enableDarkMode();
		}

		darkModeToggle.addEventListener('click', () => {
		  darkMode = localStorage.getItem('darkMode'); 
		  
		  if (darkMode !== 'enabled') {
			enableDarkMode();
		  } else {  
			disableDarkMode(); 
		  }
		});
	}
  }
}
