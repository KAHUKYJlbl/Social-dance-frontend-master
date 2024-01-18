import { type Status } from 'shared/types/status';

export interface User {
  token?: string;
}

export interface UserSchema {
  authData?: User;
  status?: Status;
  errorMessage?: string;
}
