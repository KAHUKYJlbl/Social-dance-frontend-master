import { type ChangeEventHandler } from 'react';
import cn from 'classnames';

import { Icon } from '../icon';

import styles from './checkbox.module.scss';

interface CheckboxProps {
  className?: string;
  name?: string;
  id?: string;
  label?: string;
  checked: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox = ({ className, name, id, label, checked, onChange }: CheckboxProps) => (
  <label className={cn(styles.checkboxWrapper, checked && styles.active, className)} htmlFor={id}>
    <input
      className={styles.input}
      type='checkbox'
      name={name}
      id={id}
      checked={checked}
      onChange={onChange}
    />

    <Icon className={styles.checkboxIcon} name={checked ? 'checkboxActive' : 'checkbox'} />

    {label && <span className={styles.label}>{label}</span>}
  </label>
);
