import React, { useEffect, useCallback, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { searchSliceSelector } from '../../redux/selectors';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import {
  fetchProducts,
  setSelectedCountry,
  setSelectedCity,
  setSelectedDate
} from '../../redux/search';

import {
  SSearchForm,
  SSearchFormRow
} from './SearchForm.styled';

import DropdownSelect from '../DropdownSelect';
import DatePicker from '../DatePicker';

const SearchForm = (): ReactElement => {
  const dispatch = useAppDispatch();
  const {
    countries,
    cities,
    dates,
    selectedCountry,
    selectedCity,
    selectedDate
  } = useSelector(searchSliceSelector);

  useEffect(() => {
    if (selectedCity && selectedDate) {
      dispatch(fetchProducts({
        city: selectedCity,
        date: selectedDate
      }));
    }
  }, [selectedCity, selectedDate]);

  const handleSelectCountry = useCallback((val) => dispatch(setSelectedCountry(val)), []);
  const handleSelectCity = useCallback((val) => dispatch(setSelectedCity(val)), []);
  const handleSelectDate = useCallback((val) => dispatch(setSelectedDate(val)), []);

  return (
    <SSearchForm>
      <SSearchFormRow>
        <DropdownSelect
          id="country"
          label="Country"
          selectValueTitle="Choose the country"
          options={countries.map(({ name }) => ({ title: name, value: name }))}
          value={selectedCountry}
          setValue={handleSelectCountry}
        />
        <DropdownSelect
          id="country"
          label="City"
          selectValueTitle="Choose the city"
          options={cities.map(({ id, name }) => ({ title: name, value: id }))}
          disabled={selectedCountry === undefined}
          value={selectedCity}
          setValue={handleSelectCity}
        />
      </SSearchFormRow>
      <SSearchFormRow>
        <DatePicker
          label="Date"
          dates={dates}
          disabled={selectedCity === undefined}
          value={selectedDate}
          setValue={handleSelectDate}
        />
      </SSearchFormRow>
    </SSearchForm>
  );
};

export default SearchForm;
