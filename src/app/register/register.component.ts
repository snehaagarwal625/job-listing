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
  submitted = false;
  constructor(private router: Router,
    private _apiSvc: ApiService) { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNo: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    // location: new FormControl('', Validators.required),
    // resume: new FormControl('')
  })

  get registerFormControl() {
    return this.registerForm.controls;
  }

  radioChange($event){
    if($event.value==='employee'){
      this.registerForm.addControl('location',new FormControl('', Validators.required));
      this.registerForm.addControl('resume',new FormControl('', Validators.required));
    }else if($event.value==='employer' && this.registerForm.controls.location && this.registerForm.controls.resume){
      this.registerForm.removeControl('location');
      this.registerForm.removeControl('resume');
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this._apiSvc.saveUser(this.registerForm.value).subscribe((res) => {
        this.user = res;
        console.log(this.user);
      })
      this.router.navigateByUrl('otp', { state: { example: this.registerForm.value } });
    }
  }
}
