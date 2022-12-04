import React, { useEffect } from 'react';

import { useAppDispatch } from '../hooks';

import {
  fetchLocations,
  fetchDates
} from '../redux/search';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLocations());
    dispatch(fetchDates());
  }, []);

  return (
    <>
      <Header />
      <SearchForm />
      <Footer />
    </>
  );
};

export default Search;
