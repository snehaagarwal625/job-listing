import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  form;
  constructor(private router: Router,
    public activatedRoute: ActivatedRoute,
    private _apiSvc:ApiService)
   { 
    this.form= this.router.getCurrentNavigation().extras.state;
   }

  ngOnInit(): void {
  
  }
  otpForm = new FormGroup({
    otp: new FormControl(),
  })
  onSubmit() {
    this.form.example['otp']=this.otpForm.value.otp;
    console.log(this.form.example);
    
    this._apiSvc.saveUserWithOtp(this.form.example).subscribe((res)=>{
      if(this.form.example.user == 'employer') {

      } else {
        
      }
    })
  }
  onReSubmit(){
    console.log(this.otpForm);
  }

}
