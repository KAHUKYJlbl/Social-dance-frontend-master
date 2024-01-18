import { useState } from 'react';
import { LoginForm } from '../login-form/login-form';
import { ResetForm } from '../reset-form/reset-form';

export const Login = () => {
  const [resetPasswordForm, setResetPasswordForm] = useState<boolean>(false);

  return !resetPasswordForm ? (
    <LoginForm onShowReset={() => setResetPasswordForm(true)} />
  ) : (
    <ResetForm />
  );
};
