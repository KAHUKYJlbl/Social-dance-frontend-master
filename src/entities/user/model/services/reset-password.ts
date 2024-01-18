import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from 'app/providers/store-provider';
import { apiRequest } from 'shared/api/request';

interface ResetPasswordArgs {
  email: string;
}

export const resetPassword = createAsyncThunk<void, ResetPasswordArgs, ThunkConfig<string>>(
  'signin/resetPassword',
  async (args: ResetPasswordArgs) => {
    await apiRequest({
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      method: 'POST',
      url: '/users/reset_password/',
      body: args,
    });
  },
);
