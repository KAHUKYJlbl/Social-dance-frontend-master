import { memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';

import { AppLink } from 'shared/ui/app-link';
import { NavLinks } from '../../model/links';

import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { pathname } = useLocation();

  const links = useMemo(
    () =>
      NavLinks.map(({ path, text }) => (
        <AppLink to={path} key={path} active={pathname === path}>
          {text}
        </AppLink>
      )),
    [pathname],
  );

  return <nav className={cn(styles.navbar, className)}>{links}</nav>;
});
