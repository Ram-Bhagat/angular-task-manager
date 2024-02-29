import { Injectable, OnInit } from '@angular/core';
import { UserLogin, userSignUp } from '../models/user-model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCrdService implements OnInit {

  currentUserName:string = "";
  isLogged:Boolean= false;
  loginError= "";

  constructor(private httpClient:HttpClient,private route:Router) { }

  ngOnInit(): void {
    
  }

  userSignUp(data:userSignUp)
  {
   
  }
  userLogin(data:UserLogin)
  {
    this.httpClient.post<any>('http://localhost:9090/authenticate',data,{observe:'response'}).subscribe(
      (response)=>{
        
        this.currentUserName = response.body.userName
        let userDetails = JSON.stringify(response.body);
        sessionStorage.setItem('user',userDetails);
        this.route.navigate(['/admin/dashboard']);
        this.isLogged = true;
      },
      (error)=>{
        this.isLogged = false
        this.loginError = error.error.message
      },
    )
  }
  isAuthenticated()
  {
    return this.isLogged;
  }
  userLogOut()
  {
    sessionStorage.removeItem('user');
    this.currentUserName = "";
    this.route.navigate(['/']);

  }
  detactLogin() {
    let currentUserString = sessionStorage.getItem('user');
    if (currentUserString) {
      let user = JSON.parse(currentUserString);
       this.currentUserName = user.userName ;
      this.isLogged = true
    }
  }
  
}
