import React from 'react';

import {
  SDropdown,
  SDropdownLabel,
  SDropdownSelect
} from './DropdownSelect.styled';

interface DropdownOption {
  title: string;
  value: string;
}

interface DropdownSelectProps {
  id: string;
  label: string;
  selectValueTitle: string;
  options: DropdownOption[];
  disabled?: boolean;

  value?: string;
  setValue: (value?: string) => void;
}

const DropdownSelect = (props: DropdownSelectProps): JSX.Element => {
  const {
    id,
    label,
    selectValueTitle,
    options,
    disabled = false,
    value,
    setValue
  } = props;

  const onChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    if (evt.target.value === '-1') {
      setValue();
    } else {
      setValue(evt.target.value);
    }
  };

  return (
    <SDropdown disabled={disabled}>
      <SDropdownLabel htmlFor={id}>
        { label }
      </SDropdownLabel>
      <SDropdownSelect value={value} onChange={onChange}>
        <option value={-1}>
          { selectValueTitle }
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </SDropdownSelect>
    </SDropdown>
  );
};

export default DropdownSelect;
