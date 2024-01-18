import { memo } from 'react';
import cn from 'classnames';

import { type IconName } from '../icon/utils';
import styles from './text.module.scss';
import { Icon } from '../icon';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  TitleTag?: 'h2' | 'h3' | 'h4';
  align?: 'left' | 'center' | 'right';
  icon?: IconName;
}

export const Text = memo(
  ({ className, title, text, TitleTag = 'h2', align = 'left', icon }: TextProps) => (
    <div className={cn(styles.textWrap, className, styles[align])}>
      {icon && <Icon name={icon} />}
      {title && <TitleTag className={styles.title}>{title}</TitleTag>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  ),
);
