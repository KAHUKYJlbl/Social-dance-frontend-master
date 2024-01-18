import { createSlice } from '@reduxjs/toolkit';
import { clearUserToken, getUserToken } from 'shared/api/token';
import { type UserSchema } from '../types/user';
import { signInByEmail } from '../services/signin-by-email';
import { resetPassword } from '../services/reset-password';

const initialState: UserSchema = {
  authData: {
    token: getUserToken(),
  },
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.authData.token = '';
      clearUserToken();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInByEmail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signInByEmail.fulfilled, (state, action) => {
        state.status = 'success';
        state.authData.token = action.payload;
      })
      .addCase(signInByEmail.rejected, (state, action) => {
        state.status = 'error';
        state.errorMessage = action.payload;
      })

      .addCase(resetPassword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.status = 'success';
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = 'error';
        state.errorMessage = action.payload;
      });
  },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
