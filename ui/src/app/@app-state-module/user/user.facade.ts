import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NGXLogger } from 'ngx-logger';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, throttleTime } from 'rxjs/operators';
import { AuthService, User, UserService } from '../../@api-module';

import { AppState } from '../app.state';
import * as userActions from './user.actions';
import { UsersQuery } from './user.reducer';
import { UserState } from '../model';

type Action = userActions.All;

@Injectable()
export class UserFacade {

  // ************************************************
  // Observable Queries available for consumption by views
  userState$ = this.store.select(UsersQuery.getUserState);

  /**
   * Login with backend
   */
  @Effect() login$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.LOGIN),
    throttleTime(500),
    map((action: userActions.Login) => action.payload),
    switchMap(payload => {
      return this.authService.loginUser(payload)
        .pipe(
          catchError(err => of(new userActions.AuthError(err)))
        );
    }),
    map(result => {
      if (result instanceof userActions.AuthError) {
        return result;
      }
      return new userActions.Authenticated(result);
    })
  );


  @Effect() logout$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.LOGOUT),
    switchMap(() => {
      return this.authService.logoutUser()
        .pipe(
          catchError(err => {
            this.log.error(err);
            return of(new userActions.AuthError(err));
          })
        );
    }),
    map(result => {
      if (result instanceof userActions.AuthError) {
        return result;
      }
      return new userActions.NotAuthenticated();
    }));

  @Effect() update$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UPDATE),
    throttleTime(500),
    map((action: userActions.Login) => action.payload),
    switchMap(payload => {
      return this.userService.updateUser(payload)
        .pipe(
          catchError(err => of(new userActions.AuthError(err)))
        );
    }),
    map(result => {
      if (result instanceof userActions.AuthError) {
        return result;
      }
      return new userActions.UpdatedUser(result);
    })
  );

  // ************************************************
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private log: NGXLogger
  ) {
  }

  // ************************************************
  // Internal Code
  // ************************************************

  /**
   *
   */
  login(user: User): Observable<UserState> {
    this.store.dispatch(new userActions.Login(user));
    return this.userState$;
  }

  /**
   *
   */
  logout(): Observable<UserState> {
    this.store.dispatch(new userActions.Logout());
    return this.userState$;
  }

  update(user: User) {
    this.store.dispatch(new userActions.UpdateUser(user));
  }

  notAuthenticated(): Observable<UserState> {
    this.store.dispatch(new userActions.NotAuthenticated());
    return this.userState$;
  }

  // ******************************************
  // Internal Methods
  // ******************************************


  // protected googleLogin(): firebase.Promise<any> {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   return this.afAuth.auth.signInWithPopup(provider);
  // }

  clearState() {
    this.store.dispatch(new userActions.Clear());
  }
}
