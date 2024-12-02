import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { UserService } from 'app/content/user/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

  // constructor(private userService: UserService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //   let currentUrlPermissions = [];
    //   if (route.firstChild.data.permission) {
    //     currentUrlPermissions = route.firstChild.data.permission;
    //   }
    //   if (currentUrlPermissions[0] === 'public') {
    //     return true;
    //   }
    //   if (this.userService.canSeeModule(currentUrlPermissions)) {
    //     return true
    //   } else {
    //     this.router.navigate(["/subscribers/updates"]);
    return false;
    //   };
  }

}
