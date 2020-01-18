import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      pomegranate: string,
      cedar: string,
      cardinal: string,
      nevada: string,
      silverrust: string,
      snow: string,
      darkness: string
    },
    typography: {
      headline: string,
      body: string
    },
    layout: {
      gridTemplateColumns: string,
      gridColumnGap: string,
      mobileMaxWidth: string,
      contentMaxWidth: string
    }
  }
}