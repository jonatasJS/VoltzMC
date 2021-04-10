import 'styled-componets';

interface Theme {
  colors: {
    background: string;
    backgroundLight: string;
    backgroundHover: string;
    backgroundOverlay: string;
    grayLine: string;
    text: string;
    textHighlight: string;
    title: string;
    red: string;
    green: string;
    gold: string;
    goldLight: string;
    twitter: string;
    discord: string;
  };
  gradient: string;
  boxShadow: string;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
