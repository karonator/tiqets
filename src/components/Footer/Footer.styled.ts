import styled from 'styled-components';

export const SFooter = styled.footer`
  background: ${({ theme }) => theme.colors.footerBackground};
  color: ${({ theme }) => theme.colors.footerTextColor};
  font: normal 400 12px ${({ theme }) => theme.fonts};
  letter-spacing: 1px;
  line-height: 16px;
  padding: 32px 16px;
  text-align: center;
`;
