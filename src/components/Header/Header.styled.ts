import styled from 'styled-components';

export const SHeader = styled.header`
  background: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.headerTextColor};
  font: normal 500 32px ${({ theme }) => theme.fonts};
  line-height: 40px;
  padding: 64px 16px;
  text-align: center;
`;

export const SLoader = styled.div<{ show?: boolean }>`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 22px;
  height: 22px;

  animation: spin 1.6s linear infinite;
  border-radius: 50%;
  border: 5px solid #FFF4;
  border-top: 5px solid #FFF;
  opacity: 0;
  transition: 0.2s all;

  ${({ show }) => show && `
    opacity: 1;
  `}

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const SError = styled.div`
  background: ${({ theme }) => theme.colors.errorBackground};
  color: ${({ theme }) => theme.colors.errorTextColor};
  font: normal 400 14px ${({ theme }) => theme.fonts};
  padding: 20px 10px;
`;
