import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  otpForm = new FormGroup({
    email: new FormControl(),
  })
  onSubmit() {
    console.log(this.otpForm);
  }
  onReSubmit(){
    console.log(this.otpForm);
  }

}
