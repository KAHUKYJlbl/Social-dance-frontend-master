import { Children } from 'react';
import { components, type ValueContainerProps } from 'react-select';

import type { Option } from './select';

export const SelectValueContainer = ({ children, ...props }: ValueContainerProps<Option>) => {
  const {
    isMulti,
    hasValue,
    getValue,
    selectProps: { multiValueName },
  } = props;

  if (!isMulti || !hasValue) {
    return <components.ValueContainer {...props}>{children}</components.ValueContainer>;
  }

  const countSelectedOptions = getValue().length;

  const removedMultiValueLabels = Children.map(children, (child, index) => {
    if (index < countSelectedOptions) {
      return;
    }

    return child;
  });

  const newChildren = [`${countSelectedOptions} ${multiValueName}`, ...removedMultiValueLabels];

  return <components.ValueContainer {...props}>{newChildren}</components.ValueContainer>;
};
