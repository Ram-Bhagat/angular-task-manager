import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class DashboardService {

    getTeamMemberSummery(): any[]
    {
      var TeamMemberSummery = [
        {region: "East", TeamMemberCount: 20, UnavilableMember: 5},
        {region: "West", TeamMemberCount: 11, UnavilableMember: 2},
        {region: "North", TeamMemberCount: 23, UnavilableMember: 8},
        {region: "South", TeamMemberCount: 16, UnavilableMember: 4},
      ];
      return TeamMemberSummery;
    }
  }