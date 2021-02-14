import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  user={
    name: 'Sneha',
    email: 'snehaagarwal625@gmail.com',
    mobile_no: 8389874080,
  }
  constructor(private router: Router) { 
    this.user= this.router.getCurrentNavigation().extras.state.user;
  }

  ngOnInit(): void {
  }

}
