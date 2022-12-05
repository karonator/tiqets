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

export const SDatePickerDate = styled.button<{ selected?: boolean }>`
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.inputTextColor};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  cursor: pointer;
  flex: 1;
  padding: 14px 0px;
  text-align: center;
  transition: 0.3s all;

  ${({ selected, theme }) => !selected && `
    &:hover {
      background: ${theme.colors.dateButtonBackgroundHover};
    }
  `}

  ${({ selected, theme }) => selected && `
    background: ${theme.colors.dateButtonSelectedBackground};
    color: ${theme.colors.dateButtonSelectedTextColor};
  `}
`;

export const SDatePickerDateWeekday = styled.div`
  font: normal 400 12px ${({ theme }) => theme.fonts};
`;

export const SDatePickerDateDay = styled.div`
  font: normal 500 24px ${({ theme }) => theme.fonts};
  line-height: 32px;
`;

export const SDatePickerSeparator = styled.div`
  position: relative;
  width: 1px;

  &::after {
    background-color: ${({ theme }) => theme.colors.inputBorder};
    content: ' ';
    height: 40px;
    left: 0;
    position: absolute;
    top: calc(50% - 20px);
    width: 1px;
  }
`;
