import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements  CanLoad {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsAuth();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsAuth();
  }

  private getIsAuth() {
    const pass = localStorage.getItem('pass');
    const login = localStorage.getItem('login');
    const isAuth = (pass || login) ? true : false;
    return isAuth;
  }

}
