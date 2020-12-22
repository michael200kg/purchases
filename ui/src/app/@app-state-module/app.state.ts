import {UserState} from './model/user.state.model';

export interface AppState {
  readonly userState: UserState;
}
