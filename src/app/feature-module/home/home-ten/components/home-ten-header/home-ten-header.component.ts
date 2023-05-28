import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-ten-header',
  templateUrl: './home-ten-header.component.html',
  styleUrls: ['./home-ten-header.component.css']
})
export class HomeTenHeaderComponent implements OnInit {

  constructor( private viewportScroller: ViewportScroller) { }
  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId)
  }
  ngOnInit(): void {
  }

}
