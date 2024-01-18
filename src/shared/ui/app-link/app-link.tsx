import { memo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './app-link.module.scss';

interface AppLinkProps {
  children: ReactNode;
  to: string;
  active?: boolean;
  className?: string;
}

export const AppLink = memo(({ children, to, active, className }: AppLinkProps) => (
  <Link to={to} className={cn(styles.link, className, active && styles.active)}>
    {children}
  </Link>
));
