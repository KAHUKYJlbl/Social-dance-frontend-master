import { useRef, type ReactNode, useState } from 'react';
import cn from 'classnames';
import { useClickOutside } from 'shared/lib/hooks/use-click-outside';

import styles from './mobile-modal.module.scss';

interface MobileModalProps {
  /** className for modal content */
  className?: string;
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
}

const MobileModal = ({ className, children, open, onClose }: MobileModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(onClose, ref);

  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleTouchMove = (evt: React.TouchEvent<HTMLDivElement>) => {
    evt.preventDefault();
    setIsClosing(true);
    setTimeout(onClose, 200);
  };

  if (!open) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.overlay}>
        <div
          ref={ref}
          className={cn(styles.content, className, isClosing && styles.close)}
          onTouchMove={handleTouchMove}
        >
          <span className={styles.draggableTrigger} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileModal;
