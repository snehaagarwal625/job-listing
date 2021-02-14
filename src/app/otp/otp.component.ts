import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  form;
  submitted=false;
  constructor(private router: Router,
    public activatedRoute: ActivatedRoute,
    private _apiSvc: ApiService) {
    this.form = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {

  }
  otpForm = new FormGroup({
    otp: new FormControl('', Validators.required),
  })

  get otpFormControl() {
    return this.otpForm.controls;
  }
  onSubmit() {
    this.submitted=true;
    if (this.otpForm.valid) {
      this.form.example['otp'] = this.otpForm.value.otp;
      console.log(this.form.example);
      if (!this.form.example.firstname) {
        this._apiSvc.verifyUserWithOtp(this.form.example).subscribe((res: any) => {
          console.log(res.id);

          this.router.navigateByUrl('dashboard', { state: { id: res.id } });
        });

      } else {
        this._apiSvc.saveUserWithOtp(this.form.example).subscribe((res: any) => {
          console.log(res.id);

          this.router.navigateByUrl('dashboard', { state: { id: res.id } });
        });
      }

    }
  }
  onReSubmit() {
    console.log(this.otpForm);
  }

}
