import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-home-seven-header',
  templateUrl: './home-seven-header.component.html',
  styleUrls: ['./home-seven-header.component.css']
})
export class HomeSevenHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
