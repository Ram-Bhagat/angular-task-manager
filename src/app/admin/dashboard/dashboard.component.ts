import { Component, OnInit, inject } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  dashboardService:DashboardService = inject(DashboardService)
  ToDay:Date| any;

  Designation:string = 'owner'
  Username:string = 'Kavya'
  PendingTasks:number = 5
  UpComingProjects = 0.2;
  TotalCostOfAllProjects:number = 15;
  NoOfTeamMembers:number = 10;


  projectName = "";
  yearsSelected :number|any
  TeamMemberSummery:any= [];
  TeamMember: any = [];
  Years:number[] = [];
  Projects:any = [];
  Clients:any = []



  AvailableFunds = 400;
  CurrentExpenditure = 500;
  ProjectCost = 600

  ngOnInit(): void {
    this.TeamMemberSummery = this.dashboardService.getTeamMemberSummery();


    this.ToDay = new Date()
    this.TeamMember = [
      {region: "East", members:[
        {id:1, name:"leon",status:"Busy"},
        {id:2, name:"Siyo",status:"Avilable"},
        {id:3, name:"Dora",status:"Busy"},
        {id:4, name:"Helan",status:"Avilable"},
      ]},
      {region: "West", members:[
        {id:1, name:"leon",status:"Busy"},
        {id:2, name:"Siyo",status:"Avilable"},
        {id:3, name:"Dora",status:"Busy"},
        {id:4, name:"Helan",status:"Avilable"},
      ]},
      {region: "North", members:[
        {id:1, name:"leon",status:"Busy"},
        {id:2, name:"Siyo",status:"Avilable"},
        {id:3, name:"Dora",status:"Busy"},
        {id:4, name:"Helan",status:"Avilable"},
      ]},
      {region: "South", members:[
        {id:1, name:"leon",status:"Busy"},
        {id:2, name:"Siyo",status:"Avilable"},
        {id:3, name:"Dora",status:"Busy"},
        {id:4, name:"Helan",status:"Avilable"},
      ]}
    ];

    this.Projects = [
      "Project A",
      "Project B",
      "Project C",
    ];
    this.Clients =  [
      "Acme Corporation",
      "Tech Innovations Ltd.",
      "Global Solutions Group",
      "Strategic Partners Inc.",
    ];
    
    for(let i = 2016; i<= 2024; i++){
      this.Years.push(i)
    }

  }

  onYearChange(event:any){
    this.yearsSelected = event.target.innerText;
  }
  
  onProjectChange(event:any){
    this.projectName = event.target.textContent
    if(this,this.projectName === 'Project A'){
      this.AvailableFunds = 400;
      this.CurrentExpenditure = 500;
      this.ProjectCost = 600
    }else if(this,this.projectName === 'Project B'){
      this.AvailableFunds = 100;
      this.CurrentExpenditure = 200;
      this.ProjectCost = 300
    }else if(this,this.projectName === 'Project C'){
      this.AvailableFunds = 300;
      this.CurrentExpenditure = 400;
      this.ProjectCost = 500
    }
  }
  

}
