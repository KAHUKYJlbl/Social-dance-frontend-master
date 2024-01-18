import { type ChangeEventHandler } from 'react';
import cn from 'classnames';

import { Icon } from '../icon';

import styles from './radio.module.scss';

interface RadioProps {
  className?: string;
  name?: string;
  id?: string;
  label?: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  clickHandler: () => void;
  currentState: string;
}

export const Radio = ({
  className,
  name,
  id,
  label,
  value,
  onChange,
  clickHandler,
  currentState,
}: RadioProps) => (
  <label className={cn(styles.radioWrapper, className)} htmlFor={id} onClick={clickHandler}>
    <input
      className={styles.input}
      type='radio'
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    />

    <Icon
      className={styles.radioIcon}
      name={currentState === value ? 'radioCheck' : 'radioUncheck'}
    />

    {label && <span className={styles.label}>{label}</span>}
  </label>
);
