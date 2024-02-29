import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProjectsComponent,
    AdminProfileComponent,
    AdminHomeComponent
  ],
  imports: [
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class AdminModule { }
