import React from 'react';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import store from './redux/store';

import Search from './views/search';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Search />
    </Provider>
  </ThemeProvider>
);

export default App;
