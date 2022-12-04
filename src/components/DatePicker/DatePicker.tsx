import React, { useRef } from 'react';

import useWidth from '../../hooks/useWidth';

import {
  SDatePicker,
  SDatePickerLabel,
  SDatePickerDates,
  SDatePickerDate,
  SDatePickerDateWeekday,
  SDatePickerDateDay,
  SDatePickerSeparator
} from './DatePicker.styled';

interface DatePickerProps {
  label: string;
  dates: string[];
  disabled?: boolean;

  value?: string;
  setValue: (value?: string) => void;
}

interface ParsedDate {
  day: number;
  weekday: string;
  raw: string;
}

const DatePicker = (props: DatePickerProps): JSX.Element => {
  const container = useRef<HTMLDivElement>(null);
  const [containerWidth] = useWidth(container);

  const {
    label,
    dates,
    disabled,
    value,
    setValue
  } = props;

  const parseDates = (rawDates: string[]): ParsedDate[] => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const parsed = rawDates.map((rawDate) => {
      const date = new Date(Date.parse(rawDate));
      return {
        day: date.getDate(),
        weekday: weekdays[date.getDay()],
        raw: rawDate
      };
    });
    return parsed;
  };

  const renderDates = (): JSX.Element[] => {
    if (containerWidth) {
      const minItemSize = 375 / 4 - 10;
      const itemCount = Math.max(3, Math.floor(containerWidth / minItemSize));

      const rendered = parseDates(dates).slice(0, itemCount).map((date: ParsedDate) => (
        <SDatePickerDate
          key={date.raw}
          selected={value === date.raw}
          onClick={() => setValue(date.raw)}
        >
          <SDatePickerDateWeekday>
            { date.weekday }
          </SDatePickerDateWeekday>
          <SDatePickerDateDay>
            { date.day }
          </SDatePickerDateDay>
        </SDatePickerDate>
      ));
      if (itemCount > 3) {
        rendered.splice(3, 0, <SDatePickerSeparator key="separator" />);
      }
      return rendered;
    }
    return [];
  };

  return (
    <SDatePicker disabled={disabled}>
      <SDatePickerLabel>
        { label }
      </SDatePickerLabel>
      <SDatePickerDates ref={container}>
        { renderDates() }
      </SDatePickerDates>
    </SDatePicker>
  );
};

export default DatePicker;
