import styled from 'styled-components';

export const SHeader = styled.header`
  background: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.headerTextColor};
  font: normal 500 32px ${({ theme }) => theme.fonts};
  line-height: 40px;
  padding: 64px 16px;
  text-align: center;
`;
