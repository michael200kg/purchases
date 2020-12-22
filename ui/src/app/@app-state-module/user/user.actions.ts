/* tslint:disable:max-classes-per-file */
import { Action } from '@ngrx/store';

export const GET_USER = '[USER] Get user$';
export const SET_THEME = '[USER] Set user$ theme';
export const UPDATE = '[USER] Update user';
export const UPDATED_USER = '[USER] Updates user';

export const AUTHENTICATED = '[Auth] Authenticated';
export const NOT_AUTHENTICATED = '[Auth] Not Authenticated';

export const LOGIN = '[Auth API] Direct login attempt';
export const LOGOUT = '[Auth API] Logout';
export const CLEAR = '[Auth] Clear';
export const EXP_TOK_ERROR = '[Auth] Expired Token Error';

export const AUTH_ERROR = '[Auth] Error';


/// Get User AuthState
export class GetUser implements Action {
  readonly type = GET_USER;

  constructor(public payload?: any) {
  }
}

export class SetTheme implements Action {
  readonly type = SET_THEME;

  constructor(public payload?: any) {
  }
}

export class Authenticated implements Action {
  readonly type = AUTHENTICATED;

  constructor(public payload?: any) {
  }
}

export class NotAuthenticated implements Action {
  readonly type = NOT_AUTHENTICATED;

  constructor(public payload?: any) {
  }
}

export class AuthError implements Action {
  readonly type = AUTH_ERROR;

  constructor(public payload?: any) {
  }
}

/// Direct Login Actions
export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload?: any) {
  }
}

/// Logout Actions
export class Logout implements Action {
  readonly type = LOGOUT;

  constructor(public payload?: any) {
  }
}

export class Clear implements Action {
  readonly type = CLEAR;

  constructor(public payload?: any) {
  }
}

export class ExpiredTokenError implements Action {
  readonly type = EXP_TOK_ERROR;

  constructor(public payload?: any) {
  }
}

export class UpdateUser implements Action {
  readonly type = UPDATE;

  constructor(public payload?: any) {
  }
}

export class UpdatedUser implements Action {
  readonly type = UPDATED_USER;

  constructor(public payload?: any) {
  }
}

export type All
  = Authenticated
  | SetTheme
  | ExpiredTokenError
  | NotAuthenticated
  | Login
  | AuthError
  | Logout
  | UpdateUser
  | UpdatedUser
  | Clear;
