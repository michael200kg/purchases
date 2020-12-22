import { AppState } from '../app.state';
import * as userActions from './user.actions';
import {UserState} from "../model/user.state.model";

export type Action = userActions.All;

/**
 * Define all store queries for Post(s)
 */
export namespace UsersQuery {
  export const getUserState = (state: AppState) => state.userState;
}

const defaultUserState = {
  user: null,
  error: null,
  isLoading: false,
  isLoggedIn: false
};

/// Reducer function
export function userStateReducer(state: UserState = defaultUserState, action: Action) {
  const ROLE_SUPERADMIN = 'ROLE_SUPERADMIN';
  const ROLE_ADMIN = 'ROLE_ADMIN';
  let newVar;
 switch (action.type) {
    case userActions.LOGIN:
      state.user = action.payload;
      state.error = null;
      state.isLoading = true;
      state.isLoggedIn = false;
      newVar = {...state};
      return newVar;

    case userActions.LOGOUT:
      state.error = null;
      state.isLoading = true;
      state.isLoggedIn = true;
      newVar = {...state};
      return newVar;

    case userActions.AUTH_ERROR:
      state.user = null;
      state.error = action.payload;
      state.isLoading = false;
      state.isLoggedIn = false;
      newVar = {...state};
      return newVar;

    case userActions.AUTHENTICATED:
      state.user = action.payload;
      state.error = null;
      state.isLoading = false;
      state.isLoggedIn = true;
      newVar = {...state};
      return newVar;

    case userActions.EXP_TOK_ERROR:
      state.user = null;
      state.error = 'Токен истек';
      state.isLoading = false;
      state.isLoggedIn = false;
      newVar = {...state};
      return newVar;

    case userActions.SET_THEME:
      newVar = {...state};
      newVar.theme = action.payload;
      return newVar;

    case userActions.NOT_AUTHENTICATED:
      newVar = {...defaultUserState};
      return newVar;

    case userActions.UPDATE:
      state.user = action.payload;
      state.error = null;
      state.isLoading = true;
      state.isLoggedIn = true;
      newVar = {...state};
      return newVar;

    case userActions.UPDATED_USER:
      state.user = action.payload;
      state.error = null;
      state.isLoading = false;
      state.isLoggedIn = true;
      newVar = {...state};
      return newVar;

    case userActions.CLEAR:
      state.isLoggedIn = false;
      if (state.user) {
        state.user.apiKey = '';
      }
      newVar = {...state};

      return newVar;

    default:
      newVar = {...state};
      return newVar;
  }
}
