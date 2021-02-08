import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ApiConstants} from "./constants"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = new ApiConstants().baseUrl;
  constructor(private http: HttpClient) { }
  getPosts()
  {
    const url=`${this.baseUrl}/jobs`
    return this.http.get(url,{withCredentials:true});
  }

  applyPosts(){
    const url = `${this.baseUrl}/jobs/apply`
    // return this.http.post(url, );
  }

  addJob(payload:any){
    const url = `${this.baseUrl}/jobs`;
    return this.http.post(url,{withCredentials:true,payload})
  }
}
