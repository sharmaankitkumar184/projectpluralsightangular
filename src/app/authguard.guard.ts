import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private route :Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id=Number(route.paramMap.get('id'));
    if(sessionStorage.getItem('token')!=null)
    {
      return true;
      
    }
    else{
     alert('Login First');
     this.route.navigate(['/login']);
     return false;
    }
    
      
  }
}
