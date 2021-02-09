import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ApiConstants} from "./constants"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = new ApiConstants().baseUrl;
  constructor(private http: HttpClient) { }
  getPostsByID(emp_id:number)
  {
    const url=`${this.baseUrl}/jobs/${emp_id}`
    return this.http.get(url,{withCredentials:true});
  }

  applyPosts(){
    const url = `${this.baseUrl}/jobs/apply`
    // return this.http.post(url, );
  }

  saveUser(payload){
    let url;
    if(payload.user==='employer'){
     url = `${this.baseUrl}/employers/register`;
    } else {
       url = `${this.baseUrl}/users/registers`;
    }
    return this.http.post(url,payload);
  }

  saveUserWithOtp(payload){
    let url;
    if(payload.user==='employer'){
     url = `${this.baseUrl}/employers/register-otp`;
    } else {
       url = `${this.baseUrl}/users/register-otp`;
    }
    return this.http.post(url,{withCredentials:true,payload});
  }
  addJob(payload:any){
    const url = `${this.baseUrl}/jobs`;
    return this.http.post(url,{withCredentials:true,payload})
  }
}
