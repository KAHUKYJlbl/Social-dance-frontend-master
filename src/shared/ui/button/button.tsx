import { type ButtonHTMLAttributes, memo, type ReactNode } from 'react';
import cn from 'classnames';
import { AppLink } from '../app-link';

import styles from './button.module.scss';

interface IButtonCustomProps {
  styleType?: 'primary' | 'secondary' | 'custom';
  link?: string;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, IButtonCustomProps {
  children: ReactNode;
  className?: string;
}

export const Button = memo(
  ({ children, className, styleType = 'primary', link, ...props }: ButtonProps) => {
    const btnStyles = cn(
      className,
      styles.button,
      styleType !== 'custom' && styles[styleType],
      props.disabled && styles.disabled,
    );

    if (link) {
      return (
        <AppLink to={link} className={btnStyles}>
          {children}
        </AppLink>
      );
    }

    return (
      <button className={btnStyles} {...props}>
        {children}
      </button>
    );
  },
);
