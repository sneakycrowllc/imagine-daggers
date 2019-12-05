import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../utils/theme';


const ThemeToggler = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeToggler;
