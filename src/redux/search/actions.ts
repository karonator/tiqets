import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IProduct } from '../../types';

import axiosInstance from '../../services/axios';

export type IRawLocationData = Record<string, Array<[number, string]>>;

export interface NetworkError {
  errorMessage: string
}

export const fetchLocations = createAsyncThunk(
  'search/fetchLocations',
  async (data, thunkApi) => {
    try {
      const response = await axiosInstance.get<IRawLocationData>('/locations');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue({
        errorMessage: `Fetch locations request error: ${(error as AxiosError).code}`
      } as NetworkError);
    }
  }
);

export const fetchDates = createAsyncThunk(
  'search/fetchDates',
  async (data, thunkApi) => {
    try {
      const response = await axiosInstance.get<string[]>('/available_dates');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue({
        errorMessage: `Fetch dates request error: ${(error as AxiosError).code}`
      } as NetworkError);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  'search/fetchProducts',
  async (data: { city: string, date: string }, thunkApi) => {
    const { date, city } = data;
    try {
      const response = await axiosInstance.get<IProduct[]>('/products', {
        params: {
          date,
          city_id: city
        }
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue({
        errorMessage: `Fetch products request error: ${(error as AxiosError).code}`
      } as NetworkError);
    }
  }
);
