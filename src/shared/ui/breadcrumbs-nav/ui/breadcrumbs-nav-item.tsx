import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import styles from 'shared/ui/breadcrumbs-nav/breadcrumbs-nav.module.scss';

import { useParseLinkWithParams } from 'shared/lib/hooks/use-parse-link-with-params';

interface IBreadcrumbsNavItemProps {
  text: string;
  link: string;
}

export const BreadcrumbsNavItem = ({ text, link }: IBreadcrumbsNavItemProps) => {
  const { pathname } = useLocation();
  const parsedLink = useParseLinkWithParams(link);

  const active = pathname === parsedLink;

  return (
    <Link className={cn(styles.breadcrumbsItem, active && styles.active)} to={link}>
      {text}
    </Link>
  );
};
