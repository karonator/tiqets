import React, { useEffect, useState, useRef } from 'react';

import { IProduct } from '../../types';

import {
  SProduct,
  SProductImage,
  SProductImagePlaceholder,
  SProductContent,
  SProductTitle,
  SProductDescription
} from './ProductCard.styled';

interface SearchResultsProps {
  product: IProduct;
}

const SearchResults = ({ product }: SearchResultsProps): JSX.Element => {
  const productCardRef = useRef<HTMLDivElement>(null);

  const [shouldLoadImage, setShouldLoadImage] = useState<boolean>(false);

  // I chose this approach to lazy load images because attribute
  // lazy in images not supported by all browsers
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

  const {
    title,
    summary,
    image
  } = product;

  return (
    <SProduct ref={productCardRef}>
      {shouldLoadImage ? <SProductImage src={image} /> : <SProductImagePlaceholder />}
      <SProductContent>
        <SProductTitle>
          { title }
        </SProductTitle>
        <SProductDescription>
          { summary }
        </SProductDescription>
      </SProductContent>
    </SProduct>
  );
};

export default SearchResults;
