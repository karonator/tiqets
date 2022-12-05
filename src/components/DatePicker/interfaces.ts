export interface DatePickerProps {
  label: string;
  dates: string[];
  disabled?: boolean;

  value?: string;
  setValue: (value?: string) => void;
}

export interface ParsedDate {
  day: number;
  weekday: string;
  raw: string;
}
