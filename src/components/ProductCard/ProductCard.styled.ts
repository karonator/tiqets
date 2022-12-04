import styled from 'styled-components';

export const SProduct = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  @media (min-width: 600px) {
    flex-direction: column;
  }
`;

export const SProductImage = styled.img`
  background: #DDD;
  aspect-ratio: 3/4;
  height: 100%;
  
  @media (min-width: 600px) {
    aspect-ratio: 3/2;
    width: 100%;
  }
`;

export const SProductImagePlaceholder = styled.div`
  background: #DDD;
  aspect-ratio: 3/4;
  height: 100%;
  
  @media (min-width: 600px) {
    aspect-ratio: 3/2;
    width: 100%;
  }
`;

export const SProductContent = styled.div`
  padding: 16px;
`;

export const SProductTitle = styled.h3`
  font: normal 500 18px 'Roboto Mono', Verdana;
  line-height: 24px;
  margin: 0 0 8px 0;
  height: 48px;
`;

export const SProductDescription = styled.p`
  font: normal 400 12px 'Roboto Mono', Verdana;
  line-height: 16px;
  margin: 0 0 16px 0;
  height: 32px;
`;
