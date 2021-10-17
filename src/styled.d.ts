import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      grey100: string;
      grey70: string;
      grey40: string;
    };
  }
}