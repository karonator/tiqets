import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { TStore } from '../../redux/store';

import ProductCard from '../ProductCard';

import {
  SSearchResultsContainer,
  SSearchResults,
  SSearchMessage
} from './SearchResults.styled';

const SearchResults = (): ReactElement => {
  const searchData = useSelector((state: TStore) => state.searchDataReducer);
  const { products } = searchData;

  return (
    <SSearchResultsContainer>
      {!products && (
        <SSearchMessage>
          Select filters first
        </SSearchMessage>
      )}
      {products?.length && products.length === 0 && (
        <SSearchMessage>
          No results found, please choose another date
        </SSearchMessage>
      )}
      {products?.length && products.length > 0 && (
        <SSearchResults>
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </SSearchResults>
      )}
    </SSearchResultsContainer>
  );
};

export default SearchResults;
