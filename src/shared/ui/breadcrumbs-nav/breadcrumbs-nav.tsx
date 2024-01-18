import { memo } from 'react';
import cn from 'classnames';

import styles from './breadcrumbs-nav.module.scss';
import { BreadcrumbsNavItem } from 'shared/ui/breadcrumbs-nav/ui/breadcrumbs-nav-item';

export interface IBreadcrumbsItem {
  id: number;
  text: string;
  link: string;
}

interface BreadcrumbsNavProps {
  breadcrumbs: IBreadcrumbsItem[];
  className?: string;
}

export const BreadcrumbsNav = memo(({ breadcrumbs, className }: BreadcrumbsNavProps) => {
  return (
    <div className={cn(className, styles.breadcrumbs)}>
      {breadcrumbs.map((item: IBreadcrumbsItem) => (
        <BreadcrumbsNavItem key={item?.id} text={item?.text} link={item?.link} />
      ))}
    </div>
  );
});
