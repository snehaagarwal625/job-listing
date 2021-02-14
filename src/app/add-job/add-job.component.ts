import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ApiConstants } from '../shared/constants'

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {
  seletedLocality:any;
  addJobForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    expire_date: new FormControl(),
    locality: new FormControl(),
    posted_by:new FormControl()
  });
  locations: Array<string> = new ApiConstants().locations;
  constructor(private _apiSvc:ApiService) { 
    
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('apply', this.addJobForm.value);
    
    // this.addJobForm.value['locality']=this.seletedLocality;
    this._apiSvc.addJob(this.addJobForm.value).subscribe(
      res=> {console.log("Job Added Successfully");
    }
      
    )
  }

}
