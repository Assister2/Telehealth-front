import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-timings',
  templateUrl: './available-timings.component.html',
  styleUrls: ['./available-timings.component.css']
})
export class AvailableTimingsComponent implements OnInit {
  userId = null;
  date = new Date;
  constructor() { }

  ngOnInit(): void {
  }
  getWeekday() {

  }
}
