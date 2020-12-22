import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { UserFacade } from '../@app-state-module/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private userFacade: UserFacade,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.userFacade.userState$
      .pipe(
        take(1),
        map(userState => {
          if (!userState.isLoggedIn) {
            this.router.navigate(['auth', 'login'])
              .then(() => console.log('AuthGuard redirected user$ to login'));
            return false;
          }
          return true;
        }));
  }
}
