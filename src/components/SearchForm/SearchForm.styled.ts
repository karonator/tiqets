import styled from 'styled-components';

export const SSearchForm = styled.section`
  max-width: 800px;
  margin: auto;
  padding: 24px 16px;
`;

export const SSearchFormRow = styled.div`
  column-gap: 16px;
  display: grid;
  margin-bottom: 16px;
  row-gap: 16px;

  &:first-of-type {
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
      row-gap: 0;
    }
  }
`;
