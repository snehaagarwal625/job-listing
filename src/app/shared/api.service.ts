import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from "./constants"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = new ApiConstants().baseUrl;
  httpOptions: { headers: any; };
  constructor(private http: HttpClient) { }
  
  getPostsByID(emp_id:number)
  {
    const url=`${this.baseUrl}/jobs/${emp_id}`
    return this.http.get(url);
  }

  getUserByID(emp_id:number)
  {
    const url=`${this.baseUrl}/user/${emp_id}`
    return this.http.get(url);
  }

  getEmployerById(id){
    const url = `${this.baseUrl}/employers/${id}`;
    return this.http.get(url);
  }
  
  getPosts() {
    const url = `${this.baseUrl}/jobs`
    return this.http.get(url);
  }

  applyPosts() {
    const url = `${this.baseUrl}/jobs/apply`
    // return this.http.post(url, );
  }

  saveUser(payload) {
    let url;
    payload['name'] = `${payload.firstname} ${payload.lastname}`;
    if (payload.user === 'employer') {
      url = `${this.baseUrl}/employers/register`;
    } else {
      url = `${this.baseUrl}/users/registers`;
    }
    return this.http.post(url, payload);
  }

  saveUserWithOtp(payload) {
    let url;
    payload['name'] = `${payload.firstname} ${payload.lastname}`;

    if (payload.user === 'employer') {
      url = `${this.baseUrl}/employers/register-otp`;
    } else {
      url = `${this.baseUrl}/users/register-otp`;
    }
    return this.http.post(url, payload);
  }

  addJob(payload: any) {
    const url = `${this.baseUrl}/jobs`;
    return this.http.post(url, payload);
  }
  verifyUser(payload){
    const url = `${this.baseUrl}/employers/verify-login`;
    return this.http.post(url,payload);
  }
  verifyUserWithOtp(payload){
    const url = `${this.baseUrl}/employers/login`;
    return this.http.post(url,payload);
  }


  
}
