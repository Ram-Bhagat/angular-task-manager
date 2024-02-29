import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CanActivate } from 'src/app/auth-gaurd/auth.gaurd';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AdminProfileComponent } from '../admin-profile/admin-profile.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProjectsComponent } from '../projects/projects.component';

const routes: Routes = [
  {
    path: "admin", 
    canActivateChild: [CanActivate],
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "projects", component: ProjectsComponent },
      { path: "profile", component: AdminProfileComponent },
      { path: "home", component: AdminHomeComponent },
    ]
  },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule { }
