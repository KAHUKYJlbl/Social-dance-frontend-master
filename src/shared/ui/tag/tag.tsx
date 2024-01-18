import { memo } from 'react';
import cn from 'classnames';

import styles from './tag.module.scss';

interface ITagProps {
  text: string;
  className?: string;
}

export const Tag = memo(({ text, className }: ITagProps) => (
  <div className={cn(className, styles.tag)}>{text}</div>
));
