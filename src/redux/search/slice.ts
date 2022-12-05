import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  ICountry,
  ICity,
  IProduct
} from '../../types';

import {
  IRawLocationData,
  fetchLocations,
  fetchDates,
  fetchProducts,
  NetworkError
} from './actions';

export interface ISearchData {
  countries: ICountry[];
  rawCities: Record<string, ICity[]>;
  cities: ICity[];
  dates: string[];
  products?: IProduct[];

  loading: boolean;
  error?: string;

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
      state.selectedDate = undefined;
      state.products = undefined;
    },
    setSelectedCity(state, { payload }: PayloadAction<string | undefined>) {
      state.selectedCity = payload;
      state.selectedDate = undefined;
      state.products = undefined;
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
      .addCase(fetchLocations.rejected, (state, action) => {
        state.loading = false;

        const error = action.payload as NetworkError;
        state.error = error.errorMessage;
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

        const error = action.payload as NetworkError;
        state.error = error.errorMessage;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }: PayloadAction<IProduct[]>) => {
        state.loading = false;
        state.products = payload.map((product) => ({
          ...product,
          // eslint-disable-next-line max-len
          discountedPrice: product.discount_percentage ? product.price * (1 - product.discount_percentage / 100) : undefined
        }));
      })
      .addCase(fetchProducts.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;

        const error = action.payload as NetworkError;
        state.error = error.errorMessage;
      });
  }
});

export const {
  setSelectedCountry,
  setSelectedCity,
  setSelectedDate
} = searchDataSlice.actions;

export default searchDataSlice.reducer;
