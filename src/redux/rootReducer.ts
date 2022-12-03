import { combineReducers } from '@reduxjs/toolkit';

import searchDataReducer from './search/slice';

const rootReducer = combineReducers({
  searchDataReducer
});

export default rootReducer;
