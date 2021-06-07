import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router'
import { Observable, of } from 'rxjs'
import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (!!this.auth.getToken()) {
      return of(true)
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          accessDenied: true
        }
      })
      return of (false)
    }
  }
  
}
