import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service'
import {Jobs} from "../shared/constants"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  jobs:Array<Jobs>;
  constructor(private _apiSvc:ApiService) { }

  ngOnInit(): void {
    this._apiSvc.getPosts().subscribe((res:Array<Jobs>)=>{
      this.jobs = res;
    })
  }

}
