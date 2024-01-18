import { Suspense, useCallback, useEffect, useState } from 'react';

import { RoutesPath } from 'app/providers/router';
import { LoginButton, Login } from 'features/login';
import { getUserToken } from 'entities/user';
import { useAppSelector } from 'shared/lib/hooks/use-app-selector';
import { useMediaQuery } from 'shared/lib/hooks/use-media-query';
import { MobileModalLazy as MobileModal } from 'shared/ui-mobile/mobile-modal/mobile-modal.lazy';
import { Modal } from 'shared/ui/modal';
import { AppLink } from 'shared/ui/app-link';
import { ReactComponent as LogoSvg } from 'shared/assets/icons/logo.svg';
import { Navbar } from '../navbar/navbar';

import styles from './header.module.scss';

export const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const isAuth = useAppSelector(getUserToken);
  const isMobile = useMediaQuery();

  useEffect(() => {
    if (isAuth) {
      setIsOpenModal(false);
    }
  }, [isAuth]);

  const handleToggleLoginModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <AppLink to={RoutesPath.main} className={styles.logo}>
          <LogoSvg />
        </AppLink>
        <Navbar className={styles.navDesktop} />
        <LoginButton isAuth={!!isAuth} onOpenModal={handleToggleLoginModal} />
      </header>

      <Navbar className={styles.navTablet} />
      {isOpenModal &&
        (isMobile ? (
          <Suspense>
            <MobileModal open={isOpenModal} onClose={handleToggleLoginModal}>
              <Login />
            </MobileModal>
          </Suspense>
        ) : (
          <Modal open={isOpenModal} onClose={handleToggleLoginModal}>
            <Login />
          </Modal>
        ))}
    </div>
  );
};
