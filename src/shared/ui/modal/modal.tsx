import { type ReactNode, useRef } from 'react';
import cn from 'classnames';

import { useClickOutside } from 'shared/lib/hooks/use-click-outside';
import { Portal } from '../portal';
import { Icon } from '../icon';

import styles from './modal.module.scss';

interface ModalProps {
  children?: ReactNode;
  /** className for modal content */
  className?: string;
  open?: boolean;
  onClose?: () => void;
}

export const Modal = ({ children, className, open, onClose }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(onClose, ref);

  if (!open) return null;

  return (
    <Portal>
      <div className={styles.modal}>
        <div className={styles.overlay}>
          <div ref={ref} className={cn(styles.content, className)}>
            {children}
            <button className={styles.closeButton} onClick={onClose}>
              <Icon className={styles.closeIcon} name='close' />
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};
