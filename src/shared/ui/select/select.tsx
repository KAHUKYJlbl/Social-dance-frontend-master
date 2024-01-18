/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactSelect, { type GroupBase, type MultiValue, type SingleValue } from 'react-select';
import cn from 'classnames';

import { SelectIndicator } from './select-indicator';
import { SelectOption } from './select-option';
import { SelectValueContainer } from './select-value-container';

import styles from './select.module.scss';

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
    multiValueName?: string;
  }
}

export interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  className?: string;
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  value?: SingleValue<Option> | MultiValue<Option>;
  defaultValue?: Option;
  isMulti?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  /** The name of selected options in multiple select */
  multiValueName?: string;
  /** The value of the search input */
  inputValue?: string;
  options?: Option[];
  onChange?: (value: Option | null) => void;
}

const noOptionsMessage = () => 'Нет опций';

export const Select = ({
  className,
  id,
  name,
  disabled,
  label,
  placeholder = '',
  required,
  value,
  defaultValue,
  isMulti,
  isClearable,
  isSearchable = false,
  multiValueName = 'направление',
  inputValue,
  options,
  onChange,
}: SelectProps) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {`${label}${required ? ' *' : ''}`}
        </label>
      )}
      <ReactSelect
        components={{
          DropdownIndicator: SelectIndicator,
          ValueContainer: SelectValueContainer,
          Option: SelectOption,
        }}
        id={id}
        name={name}
        hideSelectedOptions={false}
        defaultValue={defaultValue}
        // controlShouldRenderValue={false}
        closeMenuOnSelect={!isMulti}
        multiValueName={multiValueName}
        placeholder={placeholder}
        required={required}
        value={value}
        options={options}
        isMulti={isMulti}
        isSearchable={isSearchable}
        isDisabled={disabled}
        isClearable={isClearable}
        inputValue={inputValue}
        onChange={onChange}
        className={cn('react-select', className)}
        classNamePrefix={cn('react-select', className)}
        noOptionsMessage={noOptionsMessage}
      />
    </div>
  );
};
