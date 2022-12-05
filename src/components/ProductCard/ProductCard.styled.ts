import styled from 'styled-components';

export const SProduct = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.screenSm}px) {
    flex-direction: column;
  }
`;

export const SProductImageWrapper = styled.div`
  aspect-ratio: 3/4;
  background: #DDD;
  flex: 0;
  height: 100%;
  position: relative;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.screenSm}px) {
    aspect-ratio: 3/2;
    width: 100%;
    flex: unset;
  }
`;

export const SProductImage = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  width: 100%;
`;

export const SProductImagePlaceholder = styled.div`
  background: #DDD;
  aspect-ratio: 3/4;
  height: 100%;
  flex: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.screenSm}px) {
    aspect-ratio: 3/2;
    width: 100%;
    flex: unset;
  }
`;

export const SProductContent = styled.div`
  padding: 16px;
  color: ${({ theme }) => theme.colors.cardTextColor};
  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

export const SProductTitle = styled.h3`
  font: normal 500 16px ${({ theme }) => theme.fonts};
  line-height: 20px;
  margin-bottom: 8px;
  min-height: 40px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.screenSm}px) {
    font: normal 500 18px ${({ theme }) => theme.fonts};
    line-height: 24px;
    min-height: 48px;
  }
`;

export const SProductDescription = styled.p`
  font: normal 400 12px ${({ theme }) => theme.fonts};
  line-height: 16px;
  margin-bottom: 12px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.screenSm}px) {
    margin-bottom: 16px;
  }
`;

export const SProductPriceWrapper = styled.div`
  display: flex;
`;

const SProductPriceBase = styled.p`
  font: normal 500 14px ${({ theme }) => theme.fonts};
  line-height: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.screenSm}px) {
    font: normal 500 16px ${({ theme }) => theme.fonts};
    line-height: 24px;
  }
`;

export const SProductPrice = styled(SProductPriceBase)<{ discounted?: boolean }>`
  ${({ discounted, theme }) => discounted && `
    font: normal 400 14px ${theme.fonts};
    color: #555;
    text-decoration: line-through;

    @media (min-width: ${theme.breakpoints.screenSm}px) {
      line-height: 24px;
    }
  `}
`;

export const SProductPriceDiscount = styled(SProductPriceBase)`
  color: #B00;
  margin-right: 8px;
`;
