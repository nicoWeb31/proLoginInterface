import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authServ: AuthService,
    private router: Router
  ){}

    canActivate(): boolean {
      if (this._authServ.loggedIn()){
        return true
      }else{
        this.router.navigate(['/'])
        return false
      }

    }




}
