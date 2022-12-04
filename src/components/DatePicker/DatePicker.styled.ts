import styled from 'styled-components';

import {
  SDropdown,
  SDropdownLabel
} from '../DropdownSelect/DropdownSelect.styled';

export const SDatePicker = SDropdown;
export const SDatePickerLabel = SDropdownLabel;

export const SDatePickerDates = styled.div`
  column-gap: 4px;
  display: flex;
`;

export const SDatePickerDate = styled.button`
  background: #FFF;
  border-radius: 8px;
  border: 1px solid #000;
  cursor: pointer;
  flex: 1;
  padding: 14px 0px;
  text-align: center;
  transition: 0.3s all;

  &:hover {
    background: #EEE;
  }
`;

export const SDatePickerDateWeekday = styled.div`
  font: normal 400 12px 'Roboto Mono', Verdana;
`;

export const SDatePickerDateDay = styled.div`
  font: normal 500 24px 'Roboto Mono', Verdana;
  line-height: 32px;
`;

export const SDatePickerSeparator = styled.div`
  position: relative;
  width: 1px;

  &::after {
    background-color: #000;
    content: ' ';
    height: 40px;
    left: 0;
    position: absolute;
    top: calc(50% - 20px);
    width: 1px;
  }
`;
