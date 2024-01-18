import cn from 'classnames';

import styles from './tabs.module.scss';

// TODO: refactor when connect to store
export interface ITab {
  label: string;
  count?: number;
  active: boolean;
}

interface ITabsProps {
  tabs: ITab[];
}

export const Tabs = ({ tabs }: ITabsProps) => (
  <div className={styles.tabs}>
    {tabs.map(({ label, count, active }) => (
      <div className={cn(styles.tab, active && styles.active)} key={label}>
        <span>{label}</span>
        {count !== undefined && <span className={styles.count}>{count}</span>}
      </div>
    ))}
  </div>
);
