import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service'
import {Jobs} from "../shared/constants";
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog } from "@angular/material/dialog";
import {AddJobComponent} from '../add-job/add-job.component'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  jobs:Array<Jobs>;
  emp_id: any;
  
  constructor(private _apiSvc:ApiService,public dialog: MatDialog, private router: Router,) {
    this.emp_id= this.router.getCurrentNavigation().extras.state.id;
   }

  ngOnInit(): void {
    console.log(this.emp_id);
    
    this.fetchJobsById();
    
  }
  fetchJobsById(){
    this._apiSvc.getPostsByID(this.emp_id).subscribe((res:Array<Jobs>)=>{
      this.jobs = res;
      console.log(this.jobs); 
    })
  }
  OpenAddJobDialog()
  {
    let dialogRef = this.dialog.open(AddJobComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Job Added`); 
      this.fetchJobsById()
    });
  }

  onDelete(){
    
  }

}
