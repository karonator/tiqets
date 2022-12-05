import React, { useRef, ReactElement } from 'react';

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

import {
  DatePickerProps,
  ParsedDate
} from './interfaces';

const DatePicker = (props: DatePickerProps): ReactElement => {
  const container = useRef<HTMLDivElement>(null);
  const containerWidth = useWidth(container);

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

  const renderDates = (): ReactElement[] => {
    if (containerWidth) {
      const minItemSize = 375 / 4 - 10;
      const itemCount = Math.max(3, Math.floor(containerWidth / minItemSize));

      const rendered = parseDates(dates).slice(0, itemCount).map((date: ParsedDate) => (
        <>
          {date.day === 1 && <SDatePickerSeparator />}
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
        </>
      ));
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
