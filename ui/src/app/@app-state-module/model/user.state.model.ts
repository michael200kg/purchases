import { User } from '../../@api-module';

export class UserState {
  user?: User;
  error?: any;
  apiKey?: string;
  isLoading?: boolean;
  isLoggedIn?: boolean;
}
