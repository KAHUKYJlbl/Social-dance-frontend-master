import { components, type OptionProps } from 'react-select';

import { Icon } from '../icon';
import { type Option } from './select';

import styles from './select.module.scss';

export const SelectOption = (props: OptionProps<Option>) => {
  const { children, isMulti } = props;

  if (isMulti) {
    return (
      <components.Option className={styles.multiOption} {...props}>
        <Icon className='multi-icon' name='checkbox' />
        <Icon className='multi-icon-active' name='checkboxActive' />
        {children}
      </components.Option>
    );
  }

  return (
    <components.Option {...props}>
      {children}
      <Icon className='option-icon' name='check' />
    </components.Option>
  );
};
