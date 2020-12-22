import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {AppState, UserFacade, UserState} from '../@app-state-module';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {
  userState: UserState;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private userFacade: UserFacade
  ) {
    this.userFacade.userState$.subscribe(s => this.userState = s);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.userState.isLoggedIn && !req.url.startsWith('http://10.119.242.86')) {
      req = req.clone({
        setHeaders: {Authorization: this.userState.user.apiKey}
      });
    }
    return next.handle(req);
  }
}
