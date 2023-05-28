import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-home-eight-header',
  templateUrl: './home-eight-header.component.html',
  styleUrls: ['./home-eight-header.component.css']
})
export class HomeEightHeaderComponent implements OnInit {

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
