import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutesPath } from 'app/providers/router';
import { userActions } from 'entities/user';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { Button } from 'shared/ui/button';
import { ActionMenu, type ActionMenuItem } from 'shared/ui/action-menu';
import { Icon } from 'shared/ui/icon';

import styles from './login-button.module.scss';

interface LoginButtonProps {
  isAuth?: boolean;
  onOpenModal?: () => void;
}

export const LoginButton = memo(({ isAuth, onOpenModal }: LoginButtonProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(userActions.logout());
    navigate(RoutesPath.main);
  };

  const actions: ActionMenuItem[] = [
    {
      label: 'Мои мероприятия',
      action: () => navigate(RoutesPath.profile),
    },
    {
      label: 'Выход',
      action: () => onLogout(),
    },
  ];

  return (
    <>
      {isAuth ? (
        <ActionMenu actions={actions}>
          <Button styleType='custom' className={styles.profileButton}>
            <Icon name='user' />
          </Button>
        </ActionMenu>
      ) : (
        <Button onClick={onOpenModal}>Войти</Button>
      )}
    </>
  );
});
