import styled from 'styled-components';

export const SSearchResultsContainer = styled.section`
  border-top: 1px solid ${({ theme }) => theme.colors.sectionBorder};
  padding: 24px 16px;
`;

export const SSearchResults = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
  max-width: 800px;
  row-gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.screenSm}px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
  }
`;

export const SSearchMessage = styled.div`
  font: normal 400 12px ${({ theme }) => theme.fonts};
  line-height: 16px;
  padding: 80px 0;
  text-align: center;
`;
