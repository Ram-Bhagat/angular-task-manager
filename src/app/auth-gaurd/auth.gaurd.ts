import { inject } from "@angular/core"
import { UserCrdService } from "../services/user-crd.service"
import { Router } from "@angular/router";
export const CanActivate = () => {


  const userService=  inject(UserCrdService);
  const route = inject(Router);

  if(userService.isAuthenticated())
  {
    return true;
  } else{

    route.navigate(['/user-auth'])
    return false;
  }
}



// export const DeActivate = () => {
// const projectService = inject(ProjectService)  
//   if(!projectService.canExit())
//   {      
//     return false
//   }
//   else{
//     return true;
//   }

// }