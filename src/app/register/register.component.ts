import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    mobileNo: new FormControl(),
    location: new FormControl(),
    user: new FormControl(),
    resume: new FormControl()
  })

  onSubmit() {
    console.log(this.registerForm);
    this.router.navigateByUrl('otp');
  }

}
