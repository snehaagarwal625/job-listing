import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted=false;
  constructor(private router: Router,
    private _apiSvc:ApiService) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
  })

  get loginFormControl() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted=true;
    if (this.loginForm.valid) {
    this._apiSvc.verifyUser(this.loginForm.value).subscribe((res)=>{
      console.log(res); 
      if(res){
        this.router.navigateByUrl('otp', {state: { example: this.loginForm.value }});
      }
    })
  }
  }

}
