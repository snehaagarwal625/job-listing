import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email: new FormControl(),
  })
  onSubmit() {
    console.log(this.loginForm);
    this.router.navigateByUrl('otp');
  }

}
