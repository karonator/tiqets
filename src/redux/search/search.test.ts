import MockAdapter from 'axios-mock-adapter';

import axiosInstance from '../../api/axios';
import { testStoreBuilder } from '../store';

import { fetchLocations, fetchDates } from './actions';
import { setSelectedDate, setSelectedCity, setSelectedCountry } from './slice';

describe('Redux tests: search slice', () => {
  let mock: MockAdapter;

  const mockLocationsData = {
    'United States': [
      [
        111,
        'New York'
      ],
      [
        222,
        'Orlando'
      ]
    ]
  };

  beforeAll(() => {
    mock = new MockAdapter(axiosInstance);
  });

  afterEach(() => {
    mock.reset();
  });

  it('initial state', () => {
    const store = testStoreBuilder();
    const state = store.getState().searchDataReducer;
    expect(state).toEqual({
      countries: [],
      rawCities: {},
      cities: [],
      dates: [],
      loading: false
    });
  });

  it('fetchLocations: success', async () => {
    const store = testStoreBuilder();

    mock.onGet('/locations').reply(200, mockLocationsData);

    const result = await store.dispatch(fetchLocations());
    expect(result.type).toBe('search/fetchLocations/fulfilled');

    const state = store.getState().searchDataReducer;
    expect(state).toEqual({
      countries: [{
        name: 'United States'
      }],
      rawCities: {
        'United States': [
          {
            id: '111',
            name: 'New York'
          },
          {
            id: '222',
            name: 'Orlando'
          }
        ]
      },
      cities: [],
      dates: [],
      loading: false
    });
  });

  it('fetchLocations: fail', async () => {
    const store = testStoreBuilder();

    mock.onGet('/locations').timeoutOnce();

    const result = await store.dispatch(fetchLocations());
    expect(result.type).toBe('search/fetchLocations/rejected');

    const { error } = store.getState().searchDataReducer;
    expect(error).toEqual('Fetch locations request error: ECONNABORTED');
  });

  it('fetchDates: success', async () => {
    const store = testStoreBuilder();

    mock.onGet('/available_dates').reply(200, [
      '2021-07-30',
      '2021-07-31'
    ]);

    const result = await store.dispatch(fetchDates());
    expect(result.type).toBe('search/fetchDates/fulfilled');

    const state = store.getState().searchDataReducer;
    expect(state).toEqual({
      countries: [],
      rawCities: {},
      cities: [],
      dates: [
        '2021-07-30',
        '2021-07-31'
      ],
      loading: false
    });
  });

  it('fetchDates: fail', async () => {
    const store = testStoreBuilder();

    mock.onGet('/available_dates').timeoutOnce();

    const result = await store.dispatch(fetchDates());
    expect(result.type).toBe('search/fetchDates/rejected');

    const { error } = store.getState().searchDataReducer;
    expect(error).toEqual('Fetch dates request error: ECONNABORTED');
  });

  it('setSelectedDate', () => {
    const store = testStoreBuilder();

    store.dispatch(setSelectedDate('some date'));

    const { selectedDate } = store.getState().searchDataReducer;
    expect(selectedDate).toBe('some date');
  });

  it('setSelectedCity => clear date', () => {
    const store = testStoreBuilder();

    store.dispatch(setSelectedDate('some date'));
    store.dispatch(setSelectedCity('some city'));

    const { selectedDate, selectedCity } = store.getState().searchDataReducer;
    expect(selectedDate).toBeUndefined();
    expect(selectedCity).toBe('some city');
  });

  it('setSelectedCountry => clear city & date', () => {
    const store = testStoreBuilder();

    store.dispatch(setSelectedCity('some city'));
    store.dispatch(setSelectedDate('some date'));
    store.dispatch(setSelectedCountry('some country'));

    const { selectedDate, selectedCity, selectedCountry } = store.getState().searchDataReducer;
    expect(selectedDate).toBeUndefined();
    expect(selectedCity).toBeUndefined();
    expect(selectedCountry).toBe('some country');
  });

  it('fetchLocations => setSelectedCountry', async () => {
    const store = testStoreBuilder();

    mock.onGet('/locations').reply(200, mockLocationsData);

    const result = await store.dispatch(fetchLocations());
    expect(result.type).toBe('search/fetchLocations/fulfilled');

    store.dispatch(setSelectedCountry('United States'));

    const { error, cities } = store.getState().searchDataReducer;
    expect(error).toBeUndefined();
    expect(cities).toEqual([
      {
        id: '111',
        name: 'New York'
      },
      {
        id: '222',
        name: 'Orlando'
      }
    ]);
  });
});
