import { type ChangeEvent } from 'react';
import cn from 'classnames';

import styles from './textarea.module.scss';

interface TextareaProps {
  className?: string;
  id?: string;
  name?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  error?: string;
  maxLength: number;
  value: string;
  onChange?: (value: string) => void;
}

export const Textarea = ({
  className,
  id,
  name,
  label,
  required,
  disabled,
  placeholder,
  error,
  maxLength,
  value,
  onChange,
}: TextareaProps) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={styles.textareaWrapper}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {`${label}${required ? ' *' : ''}`}
        </label>
      )}

      <textarea
        className={cn(
          styles.textarea,
          error && styles.textareaError,
          disabled && styles.textareaDisabled,
          className,
        )}
        name={name}
        maxLength={maxLength}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={handleChange}
      />

      <div className={styles.hints}>
        {error && <span className={styles.hintError}>{error}</span>}
        <span className={styles.hint}>{`${value.length}/${maxLength}`}</span>
      </div>
    </div>
  );
};
