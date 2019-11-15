import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   constructor(private router: Router) {}

   canActivate( route :  ActivatedRouteSnapshot  , state: RouterStateSnapshot ) {

    if (localStorage.getItem('currentUser')) {
      return true;   // logged in some true
    }
      // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
   }

}
