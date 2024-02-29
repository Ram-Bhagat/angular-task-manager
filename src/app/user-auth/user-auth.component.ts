import { Component, OnInit, inject } from '@angular/core';
import { UserCrdService } from '../services/user-crd.service';
import { UserLogin } from '../models/user-model';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {


  userloginError:string|undefined;
  showUserLogin:boolean = true;

  // constructor(private userService:UserCrdService){}
  userService=  inject(UserCrdService)


  callUsersignUp(data:any){

  }
  toggleUserForm()
  {
   this.showUserLogin = !this.showUserLogin
  }
  clickUserLogin(data:UserLogin){
    
     this.userService.userLogin(data);
  }
}
