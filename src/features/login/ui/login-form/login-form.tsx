import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

import { RoutesPath } from 'app/providers/router';
import { getUserStatus, signInByEmail } from 'entities/user';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { useAppSelector } from 'shared/lib/hooks/use-app-selector';
import { Button } from 'shared/ui/button';
import { Input, type InputType } from 'shared/ui/input';
import { Text } from 'shared/ui/text';

import styles from './login-form.module.scss';
import { IconName } from 'shared/ui/icon/utils';

interface LoginFormProps {
  onShowReset: () => void;
}

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Некорректный email')
    .required('Поле обязательно для заполнения'),
  password: Yup.string()
    .min(8, 'Пароль должен быть не менее 8 символов')
    .required('Поле обязательно для заполнения'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = ({ onShowReset }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>();
  const status = useAppSelector(getUserStatus);

  const onSubmit = (values: LoginFormValues) => {
    dispatch(signInByEmail(values)).then(({ meta }) => {
      if (meta.requestStatus === 'fulfilled') {
        navigate(RoutesPath.profile);
      }
    });
  };

  const { errors, touched, values, handleChange, handleSubmit } = useFormik<LoginFormValues>({
    initialValues,
    validationSchema: LoginValidationSchema,
    onSubmit,
  });

  const [iconType, setIconType] = useState<IconName>('eyeOff')

  const onShowPassword = () => {
    if (ref.current.type === 'password') {
      ref.current.type = 'text';
      setIconType('eyeOn')
    } else {
      ref.current.type = 'password';
      setIconType('eyeOff')
    }
  };
  
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Text title='Вход' TitleTag='h4' align='center' />
      <Input
        error={touched.email && errors.email}
        placeholder='Email'
        name='email'
        value={values.email}
        onChange={handleChange}
      />
      <Input
        classNameWrapper={styles.inputPasswordWrapper}
        className={styles.inputPassword}
        ref={ref}
        error={touched.password && errors.password}
        placeholder='Пароль'
        name='password'
        type={(ref?.current?.type as InputType) ?? 'password'}
        value={values.password}
        icon={iconType}
        onClickIcon={onShowPassword}
        onChange={handleChange}
      />
      <Button className={styles.formSubmit} type='submit' disabled={status === 'loading'}>
        Войти
      </Button>
      <Button className={styles.reset} styleType='custom' onClick={onShowReset}>
        Забыли пароль?
      </Button>
    </form>
  );
};
