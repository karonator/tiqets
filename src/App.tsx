import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import Search from './views/search';

const App: React.FC = () => (
  <Provider store={store}>
    <Search />
  </Provider>
);

export default App;
