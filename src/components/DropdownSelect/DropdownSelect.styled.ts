import styled from 'styled-components';

import arrow from '../../img/arrow.svg';

export const SDropdown = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  transition: 0.3s all;

  ${({ disabled }) => disabled && `
    pointer-events: none;
    opacity: 0.1;
  `}
`;

export const SDropdownLabel = styled.label`
  font: normal 400 12px 'Roboto Mono', Verdana;
  letter-spacing: 1px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const SDropdownSelect = styled.select`
  background-image: url(${arrow});
  background-size: 10px 5px;
  background-repeat: no-repeat;
  background-position-x: calc(100% - 12px);
  background-position-y: center;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance:none;

  border-radius: 8px;
  border: 1px solid black;
  cursor: pointer;
  font: normal 500 16px 'Roboto Mono', Verdana;
  line-height: 24px;
  padding: 16px 44px 16px 12px;
`;
