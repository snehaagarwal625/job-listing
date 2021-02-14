import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service'
import {Jobs} from "../shared/constants";
import { Router } from '@angular/router';
import {LocalStorageService} from "./../services/local-storage.service"
import {MatDialog } from "@angular/material/dialog";
import {AddJobComponent} from '../add-job/add-job.component'
import { AppliedbyComponent } from '../appliedby/appliedby.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  jobs:Array<Jobs>;
  emp_id: any;
  user: any;
  
  constructor(private _apiSvc:ApiService,public dialog: MatDialog, private router: Router, private localSvc:LocalStorageService) {
    // this.emp_id= this.router.getCurrentNavigation().extras.state.id;
   }

  ngOnInit(): void {
    console.log(this.emp_id);
    console.log(this.localSvc.getLocalstorageitem("id"));
    
    this.fetchJobsById();
    // this.user = this.fetchUserByJob();
    
  }

  getEmployerById(){
    this._apiSvc.getEmployerById(this.emp_id).subscribe((res)=>{
      this.user=res; 
    })
    return this.user;
  }

  fetchUserByJob(id){
    this._apiSvc.getUserByID(id).subscribe((res)=>{
      this.user=res; 
    })
    return this.user;
  }

  fetchJobsById(){
    this._apiSvc.getPostsByID(this.emp_id).subscribe((res:Array<Jobs>)=>{
      this.jobs = res;
      console.log(this.jobs); 
    });
  }
  OpenAddJobDialog()
  {
    let dialogRef = this.dialog.open(AddJobComponent, {
      height: '400px',
      width: '500px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Job Added`); 
      this.fetchJobsById()
    });
  }

  appliedBy(id) {
    this.dialog.open(AppliedbyComponent, {
      data: this.fetchUserByJob(id),
    });
  }

  openProfile(){
    this.router.navigateByUrl('dashboard/my-profile', {state: {user:this.user}}  );
  }

  onDelete() {
    
  }

}
