import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import axiosInstance from '../../services/axios';

export type IRawLocationData = Record<string, Array<[number, string]>>;

export const fetchLocations = createAsyncThunk(
  'search/fetchLocations',
  async (data, thunkApi) => {
    try {
      const response = await axiosInstance.get<IRawLocationData>('/locations');
      return response.data;
    } catch (error) {
      const typedError = error as AxiosError;
      return thunkApi.rejectWithValue(`Something went wrong (error: ${typedError.code})`);
    }
  }
);
