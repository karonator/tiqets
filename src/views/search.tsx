import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { TStore } from '../redux/store';
import { useAppDispatch } from '../hooks';

import {
  fetchLocations,
  setSelectedCountry,
  setSelectedCity
} from '../redux/search';

import Header from '../components/Header';
import Footer from '../components/Footer';
import DropdownSelect from '../components/DropdownSelect';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchData = useSelector((state: TStore) => state.searchDataReducer);
  const {
    countries,
    cities,
    selectedCountry,
    selectedCity
  } = searchData;

  useEffect(() => {
    dispatch(fetchLocations());
  }, []);

  return (
    <>
      <Header />

      <DropdownSelect
        label="Country"
        options={countries.map((country) => ({ title: country.name, value: country.name }))}
        id="country"
        value={selectedCountry}
        setValue={(val) => dispatch(setSelectedCountry(val))}
      />

      <DropdownSelect
        label="City"
        options={cities.map((city) => ({ title: city.name, value: city.id }))}
        id="country"
        value={selectedCity}
        setValue={(val) => dispatch(setSelectedCity(val))}
      />

      <Footer />
    </>
  );
};

export default Search;
