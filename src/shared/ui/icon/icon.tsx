import { type CSSProperties } from 'react';
import cn from 'classnames';

import { getIconSvg, type IconName } from './utils';
import styles from './icon.module.scss';

interface IconProps {
  name: IconName;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export const Icon = ({ name, className, style, onClick }: IconProps) => {
  const SvgIcon = getIconSvg(name);
  if (onClick) {
    return (
      <button type='button' className={styles.button} onClick={onClick}>
        <SvgIcon style={style} className={cn(styles.icon, className)} />
      </button>
    );
  }

  return <SvgIcon style={style} className={cn(styles.icon, className)} />;
};
