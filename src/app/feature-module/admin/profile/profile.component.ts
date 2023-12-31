import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private Router: Router) {}
  changePass = false;
  personalDetails = true;
  ngOnInit(): void {}

  about() {
    this.changePass = false;
    this.personalDetails = true;
  }
  pass() {
    this.changePass = true;
    this.personalDetails = false;
  }

  submit() {
    this.Router.navigateByUrl('/admin/doc-profile');
  }
}
