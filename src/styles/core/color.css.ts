import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

type ColorScale = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type CoreColors = {
  lightSea: ColorScale;
  coralRed: ColorScale;
  corona: ColorScale;
  brightSun: ColorScale;
  silkenJade: ColorScale;
  lavenderIndigo: ColorScale;
  cerulean: ColorScale;
  grey: ColorScale;
};

export const colorContract = createThemeContract({
  lightSea: {
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
  },
  coralRed: {
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
  },
  corona: {
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
  },
  brightSun: {
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
  },
  silkenJade: {
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
  },
  lavenderIndigo: {
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
  },
  cerulean: {
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
  },
  grey: {
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
  },
});

export const lightTheme = createGlobalTheme(':root', colorContract, {
  lightSea: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
  coralRed: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
  corona: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
  brightSun: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
  silkenJade: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
  lavenderIndigo: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
  cerulean: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
  grey: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
});

export const darkTheme = createGlobalTheme('.dark-theme', colorContract, {
  lightSea: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
  coralRed: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
  corona: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
  brightSun: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
  silkenJade: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
  lavenderIndigo: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
  cerulean: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
  grey: {
    100: 'black',
    200: 'black',
    300: 'black',
    400: 'black',
    500: 'black',
    600: 'black',
    700: 'black',
    800: 'black',
    900: 'black',
  },
});
