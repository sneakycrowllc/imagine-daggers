const palette = {
  light: {
    pomegranate: '#EE4036',
    cedar: '#3A1213',
    cardinal: '#BE1E2D',
    nevada: '#6D6E70',
    silverrust: '#CCC2B7',
    snow: '#FFFFFF'
  },
  dark: {
    white: '#000000',
    black: '#FFFFFF'
  }
};

const typography = {
  headline: 'Open Sans',
  body: 'Montserrat'
};

const layout = {
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridColumnGap: '24px',
  mobileMaxWidth: '780px',
  contentMaxWidth: '1200px'
};

const baseTheme = {
  typography,
  layout
};

export const darkTheme = {
  palette: palette.dark,
  ...baseTheme
};

export const lightTheme = {
  palette: palette.light,
  ...baseTheme
};
