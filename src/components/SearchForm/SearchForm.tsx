import React from 'react';
import { useSelector } from 'react-redux';

import { TStore } from '../../redux/store';
import { useAppDispatch } from '../../hooks';

import {
  setSelectedCountry,
  setSelectedCity
} from '../../redux/search';

import {
  SSearchForm,
  SSearchFormRow
} from './SearchForm.styled';

import DropdownSelect from '../DropdownSelect';

const SearchForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const searchData = useSelector((state: TStore) => state.searchDataReducer);
  const {
    countries,
    cities,
    selectedCountry,
    selectedCity
  } = searchData;

  return (
    <SSearchForm>
      <SSearchFormRow>
        <DropdownSelect
          id="country"
          label="Country"
          selectValueTitle="Choose the country"
          options={countries.map((country) => ({ title: country.name, value: country.name }))}
          value={selectedCountry}
          setValue={(val) => dispatch(setSelectedCountry(val))}
        />

        <DropdownSelect
          id="country"
          label="City"
          selectValueTitle="Choose the city"
          options={cities.map((city) => ({ title: city.name, value: city.id }))}
          disabled={selectedCountry === undefined}
          value={selectedCity}
          setValue={(val) => dispatch(setSelectedCity(val))}
        />
      </SSearchFormRow>
      <SSearchFormRow>
        222
      </SSearchFormRow>
    </SSearchForm>
  );
};

export default SearchForm;
