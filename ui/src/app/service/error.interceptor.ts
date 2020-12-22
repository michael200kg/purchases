import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NGXLogger } from 'ngx-logger';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppState } from '../@app-state-module';


@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  private wasUnauthorised = false;

  constructor(
      private router: Router,
      private store: Store<AppState>,
      private log: NGXLogger
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
        map((event: HttpEvent<any>) => {
          return event;
        }),
        tap((event: HttpEvent<any>) => {
          if (!( event instanceof HttpErrorResponse )) {
            this.wasUnauthorised = false;
          }
        }),
        catchError(error => {
          this.displayErrorToast(error);
          return throwError(error);
        }));
  }

  private displayErrorToast(error: HttpErrorResponse) {
    if (error.error.message) {
      alert(`(${ error.error.status }): ${ error.error.message }`);
    } else {
      alert(`(${ error.status }): ${ error.error }`);
    }
  }

}
