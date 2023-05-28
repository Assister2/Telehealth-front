import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-voice-call',
  templateUrl: './voice-call.component.html',
  styleUrls: ['./voice-call.component.css']
})
export class VoiceCallComponent implements OnInit {

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
