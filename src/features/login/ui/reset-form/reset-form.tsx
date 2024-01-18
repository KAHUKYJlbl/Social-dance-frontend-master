import { type ChangeEvent } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { resetPassword } from 'entities/user';
import { type Status } from 'shared/types/status';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Text } from 'shared/ui/text';
import { ResetSuccess } from '../reset-success/reset-success';

import styles from './reset-form.module.scss';

interface ResetFormValues {
  email: string;
}

const resetPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Некорректный email')
    .required('Поле обязательно для заполнения'),
});

export const ResetForm = () => {
  const dispatch = useAppDispatch();

  const handleChangeStatus = (status: Status) => {
    setStatus(status);
  };

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (status !== 'idle') {
      handleChangeStatus('idle');
    }
    handleChange(e);
  };

  const onSubmit = (values: ResetFormValues) => {
    handleChangeStatus('loading');
    dispatch(resetPassword(values)).then(({ meta }) => {
      if (meta.requestStatus === 'fulfilled') {
        handleChangeStatus('success');
      } else {
        handleChangeStatus('error');
      }
    });
  };

  const { errors, touched, values, status, handleChange, handleSubmit, setStatus } =
    useFormik<ResetFormValues>({
      initialValues: {
        email: '',
      },
      validationSchema: resetPasswordValidationSchema,
      onSubmit,
    });

  return status !== 'success' ? (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Text title='Забыли пароль?' TitleTag='h4' align='center' />
      <Text
        className={styles.text}
        text={
          'Введите адрес электронной почты, связанный\nс вашей учетной записью, и мы отправим ссылку для сброса пароля'
        }
      />
      <Input
        error={
          (touched.email && errors.email) ||
          (status === 'reject' && 'Пользователь с таким email не зарегистрирован')
        }
        placeholder='Email'
        name='email'
        value={values.email}
        onChange={handleChangeValue}
      />
      <Button className={styles.reset} type='submit' disabled={status === 'loading'}>
        Сбросить пароль
      </Button>
    </form>
  ) : (
    <ResetSuccess email={values.email} />
  );
};
