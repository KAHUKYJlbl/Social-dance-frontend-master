import { useEffect, useRef, type ReactNode } from 'react';
import cn from 'classnames';

import styles from './action-menu.module.scss';

export interface ActionMenuItem {
  label: string;
  action: () => void;
}

interface ActionMenuProps {
  /** className for dropdown menu */
  className?: string;
  /** must be HTMLButtonElement */
  children?: ReactNode;
  actions?: ActionMenuItem[];
}

export const ActionMenu = ({ className, children, actions }: ActionMenuProps) => {
  const ref = useRef<HTMLDivElement>();
  const menuRef = useRef<HTMLUListElement>();

  useEffect(() => {
    const triggerElement = ref?.current?.children[0] as HTMLButtonElement;

    if (!triggerElement) return;

    // TODO: поработать над позиционированием меню
    menuRef.current.style.top = `${triggerElement.offsetHeight + 10}px`;
    menuRef.current.style.right = '0';

    const onToggle = () => {
      menuRef.current.classList.toggle(styles.menuListShow);
    };

    triggerElement.addEventListener('click', onToggle);

    return () => {
      triggerElement.removeEventListener('click', onToggle);
    };
  }, []);

  useEffect(() => {
    const onClickOutside = ({ target }: MouseEvent) => {
      if (ref.current && !ref.current.contains(target as Node)) {
        menuRef.current.classList.remove(styles.menuListShow);
      }
    };
    document.addEventListener('mousedown', onClickOutside);

    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  const onAction = (action: () => void) => () => {
    menuRef.current.classList.remove(styles.menuListShow);
    action();
  };

  return (
    <div ref={ref} className={styles.menu}>
      {children}
      <ul ref={menuRef} className={cn(styles.menuList, className)}>
        {actions.map(({ label, action }) => (
          <li className={styles.menuListItem} key={label} onClick={onAction(action)}>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};
