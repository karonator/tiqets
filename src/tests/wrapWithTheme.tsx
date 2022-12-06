import React, { ReactElement } from 'react';

import { ThemeProvider } from 'styled-components';
import theme from '../theme';

export const wrapWithTheme = (element: ReactElement): ReactElement => (
  <ThemeProvider theme={theme}>
    { element }
  </ThemeProvider>
);
