import { type StateSchema } from 'app/providers/store-provider';

export const getUserToken = (state: StateSchema) => state.user.authData.token;

export const getUserStatus = (state: StateSchema) => state.user.status;

export const getUserError = (state: StateSchema) => state.user.errorMessage;
