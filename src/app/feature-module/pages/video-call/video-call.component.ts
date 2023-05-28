import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.css']
})
export class VideoCallComponent implements OnInit {

  constructor(private location:Location,public commonSerivce:CommonService) { }

  ngOnInit(): void {
     this.commonSerivce.nextmessage('chat');
  }

  ngOnDestroy() {
    this.commonSerivce.nextmessage('');
  }

  
  back() {
  	 this.location.back()
  }

}
