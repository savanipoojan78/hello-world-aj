import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth:AuthService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.auth.user$.map(user=>{
      if(user) return true;

      console.log(state.url)
      this.router.navigate(['login'],{queryParams:{returnUrl:state.url}})
      return false;
    })
  }
}
