import React from 'react';
import { ThemeProvider } from 'styled-components';

import lightTheme from '../lib/theme';

const ThemeToggler = ({ children }: { children: any }) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default ThemeToggler;
