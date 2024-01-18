import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from 'app/providers/store-provider';
import { apiRequest } from 'shared/api/request';
import { setUserToken } from 'shared/api/token';

interface SignInByEmailArgs {
  email: string;
  password: string;
}

interface SignInResponse {
  access: string;
  refresh: string;
}

export const signInByEmail = createAsyncThunk<string, SignInByEmailArgs, ThunkConfig<string>>(
  'signin/signInByEmail',
  async (args: SignInByEmailArgs) => {
    const { access } = await apiRequest<SignInResponse>({
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      method: 'POST',
      url: '/auth/jwt/create/',
      body: args,
    });

    setUserToken(access);

    return access;
  },
);
