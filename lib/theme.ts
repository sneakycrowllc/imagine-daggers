import { DefaultTheme } from 'styled-components';

const palette = {
  light: {
    cardinal: '#BE1E2D',
    cedar: '#3A1213',
    darkness: '#000000',
    nevada: '#6D6E70',
    pomegranate: '#EE4036',
    silverrust: '#CCC2B7',
    snow: '#FFFFFF',
  },
};

const typography = {
  headline: 'Open Sans',
  body: 'Montserrat',
};

const layout = {
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridColumnGap: '24px',
  mobileMaxWidth: '780px',
  contentMaxWidth: '1200px',
};

const baseTheme = {
  typography,
  layout,
};

const lightTheme: DefaultTheme = {
  palette: palette.light,
  ...baseTheme,
};

export default lightTheme;
