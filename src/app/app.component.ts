import { Component, OnInit, inject } from '@angular/core';
import { UserCrdService } from './services/user-crd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project_one';

  userService=  inject(UserCrdService)


  ngOnInit(): void {
    this.userService.detactLogin()
  }
}
