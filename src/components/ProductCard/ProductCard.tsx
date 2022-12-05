import React, { useEffect, useState, useRef } from 'react';

import { IProduct } from '../../types';

import useClampedText from '../../hooks/useClampedText';

import {
  SProduct,
  SProductImageWrapper, SProductImage, SProductImagePlaceholder,
  SProductContent, SProductTitle, SProductDescription,
  SProductPriceWrapper, SProductPrice, SProductPriceDiscount
} from './ProductCard.styled';

interface SearchResultsProps {
  product: IProduct;
}

const SearchResults = ({ product }: SearchResultsProps): JSX.Element => {
  const {
    title,
    summary,
    image,
    price,
    discountedPrice
  } = product;

  const productCardRef = useRef<HTMLDivElement>(null);

  const descriptionTextRef = useRef<HTMLHeadingElement>(null);
  const shortenedSummary = useClampedText(descriptionTextRef, summary, 2);

  const [shouldLoadImage, setShouldLoadImage] = useState<boolean>(false);

  // I chose this approach to lazy load images because attribute
  // lazy in images not supported by many browsers
  useEffect(() => {
    if (!shouldLoadImage && productCardRef.current) {
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
          setShouldLoadImage(true);
        }
      });
      observer.observe(productCardRef.current);
      return () => observer.disconnect();
    }
    return undefined;
  }, [shouldLoadImage, productCardRef]);

  return (
    <SProduct ref={productCardRef}>
      {shouldLoadImage ? (
        <SProductImageWrapper>
          <SProductImage src={image} />
        </SProductImageWrapper>
      ) : <SProductImagePlaceholder />}
      <SProductContent>
        <SProductTitle>
          { title }
        </SProductTitle>
        <SProductDescription ref={descriptionTextRef}>
          { shortenedSummary }
        </SProductDescription>
        <SProductPriceWrapper>
          {discountedPrice && (
            <SProductPriceDiscount>
              €{ discountedPrice.toFixed(2) }
            </SProductPriceDiscount>
          )}
          <SProductPrice discounted={discountedPrice !== undefined}>
            €{ price.toFixed(2) }
          </SProductPrice>
        </SProductPriceWrapper>
      </SProductContent>
    </SProduct>
  );
};

export default SearchResults;
