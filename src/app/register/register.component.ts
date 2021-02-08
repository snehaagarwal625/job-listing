import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user;
  constructor(private router: Router,
    private _apiSvc:ApiService) { }

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
    this._apiSvc.saveUser(this.registerForm.value).subscribe((res)=>{
      this.user = res;
      console.log(this.user); 
    })
    this.router.navigateByUrl('otp', {state: { example: this.registerForm.value }} );
  }
}
