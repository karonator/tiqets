import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { searchSliceSelector } from '../../redux/selectors';

import ProductCard from '../ProductCard';

import {
  SSearchResultsContainer,
  SSearchResults,
  SSearchMessage
} from './SearchResults.styled';

const SearchResults = (): ReactElement => {
  const { products } = useSelector(searchSliceSelector);

  return (
    <SSearchResultsContainer>
      {!products && (
        <SSearchMessage>
          Select filters first
        </SSearchMessage>
      )}
      {products?.length === 0 && (
        <SSearchMessage>
          No results found, please choose another date
        </SSearchMessage>
      )}
      {products && products?.length > 0 && (
        <SSearchResults>
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </SSearchResults>
      )}
    </SSearchResultsContainer>
  );
};

export default SearchResults;
