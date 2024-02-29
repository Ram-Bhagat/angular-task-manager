import { Component, OnInit, inject } from '@angular/core';
import { UserCrdService } from '../services/user-crd.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  userService=  inject(UserCrdService)



  ngOnInit(): void {

  }

  logOut()
  {
    this.userService.userLogOut()
  }
}
