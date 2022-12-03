import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: false
});

export type TStore = ReturnType<typeof store.getState>;

export default store;
