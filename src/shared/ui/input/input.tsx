import { type ChangeEventHandler, type ChangeEvent, forwardRef } from 'react';
import cn from 'classnames';

import { Icon } from '../icon';
import { type IconName } from '../icon/utils';

import styles from './input.module.scss';

export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel';

interface InputProps {
  className?: string;
  classNameWrapper?: string;
  type?: InputType;
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  autocomplete?: 'on' | 'off';
  error?: string;
  maxLength?: number;
  value?: string;
  icon?: IconName;
  onClickIcon?: () => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      classNameWrapper,
      id,
      label,
      disabled,
      required,
      error,
      maxLength,
      value,
      icon,
      onClickIcon,
      onChange,
      ...props
    },
    forwardedRef,
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className={cn(styles.inputWrapper, classNameWrapper)}>
        {label && (
          <label className={styles.label} htmlFor={id}>
            {`${label}${required ? ' *' : ''}`}
          </label>
        )}

        <input
          className={cn(
            styles.input,
            error && styles.inputError,
            disabled && styles.inputDisabled,
            className,
          )}
          ref={forwardedRef}
          value={value}
          maxLength={maxLength}
          onChange={handleChange}
          {...props}
        />

        {icon && <Icon className={styles.clickIcon} name={icon} onClick={onClickIcon} />}

        {(maxLength || error) && (
          <div className={styles.hints}>
            {error && <span className={styles.hintError}>{error}</span>}
            {maxLength && <span className={styles.hint}>{`${value.length}/${maxLength}`}</span>}
          </div>
        )}
      </div>
    );
  },
);
