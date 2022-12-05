export interface DropdownOption {
  title: string;
  value: string;
}

export interface DropdownSelectProps {
  id: string;
  label: string;
  selectValueTitle: string;
  options: DropdownOption[];
  disabled?: boolean;

  value?: string;
  setValue: (value?: string) => void;
}
