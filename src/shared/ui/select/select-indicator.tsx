import { components, type GroupBase, type DropdownIndicatorProps } from 'react-select';

import { Icon } from '../icon';
import { type Option } from './select';

export const SelectIndicator = (
  props: DropdownIndicatorProps<Option, boolean, GroupBase<Option>>,
) =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <Icon className='select-arrow' name='arrowDown' />
    </components.DropdownIndicator>
  );
