import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  ICountry,
  ICity
} from '../../types';

import {
  IRawLocationData,
  fetchLocations,
  fetchDates
} from './actions';

export interface ISearchData {
  countries: ICountry[];
  rawCities: Record<string, ICity[]>;
  cities: ICity[];
  dates: string[];

  loading: boolean;

  selectedCountry?: string;
  selectedCity?: string;
  selectedDate?: string;
}

const initialSearchData: ISearchData = {
  countries: [],
  rawCities: {},
  cities: [],
  dates: [],

  loading: false
};

const searchDataSlice = createSlice({
  name: 'search',
  initialState: initialSearchData,
  reducers: {
    setSelectedCountry(state, { payload }: PayloadAction<string | undefined>) {
      state.cities = payload ? state.rawCities[payload] : [];
      state.selectedCountry = payload;
      state.selectedCity = undefined;
    },
    setSelectedCity(state, { payload }: PayloadAction<string | undefined>) {
      state.selectedCity = payload;
    },
    setSelectedDate(state, { payload }: PayloadAction<string | undefined>) {
      state.selectedDate = payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLocations.fulfilled, (state, { payload }: PayloadAction<IRawLocationData>) => {
        state.loading = false;

        state.countries = Object.keys(payload).map((countryName) => ({ name: countryName }));
        Object.keys(payload).forEach((countryName: string) => {
          state.rawCities[countryName] = payload[countryName].map((value: [number, string]) => ({
            id: value[0].toString(),
            name: value[1]
          }));
        });
      })
      .addCase(fetchLocations.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        // log action.payload later...
      })
      .addCase(fetchDates.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDates.fulfilled, (state, { payload }: PayloadAction<string[]>) => {
        state.loading = false;
        state.dates = payload;
      })
      .addCase(fetchDates.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        // log action.payload later...
      });
  }
});

export const {
  setSelectedCountry,
  setSelectedCity,
  setSelectedDate
} = searchDataSlice.actions;

export default searchDataSlice.reducer;
