import React from 'react';

interface DropdownOption {
  title: string;
  value: string;
}

interface DropdownSelectProps {
  label: string;
  id: string;
  options: DropdownOption[];

  value?: string;
  setValue: (value?: string) => void;
}

const DropdownSelect = (props: DropdownSelectProps): JSX.Element => {
  const {
    label,
    id,
    options,
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
    <div>
      <label htmlFor={id}>
        { label }
      </label>
      <select value={value} onChange={onChange}>
        <option value={-1}>
          zzz
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelect;
