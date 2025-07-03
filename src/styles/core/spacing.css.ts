import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

export type SpacingScale = {
  '000': string;
  '0063': string;
  '0125': string;
  '025': string;
  '0375': string;
  '050': string;
  '075': string;
  '100': string;
  '150': string;
  '200': string;
  '250': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '1000': string;
};

export type CoreSpacing = {
  spacing: SpacingScale;
};

export const spacingContract = createThemeContract({
  spacing: {
    '000': null,
    '0063': null,
    '0125': null,
    '025': null,
    '0375': null,
    '050': null,
    '075': null,
    '100': null,
    '150': null,
    '200': null,
    '250': null,
    '300': null,
    '400': null,
    '500': null,
    '600': null,
    '1000': null,
  },
});

const spacingValues: SpacingScale = {
  '000': '0',
  '0063': '0.0625rem',
  '0125': '0.125rem',
  '025': '0.25rem',
  '0375': '0.375rem',
  '050': '0.5rem',
  '075': '0.75rem',
  '100': '1rem',
  '150': '1.5rem',
  '200': '2rem',
  '250': '2.5rem',
  '300': '3rem',
  '400': '4rem',
  '500': '5rem',
  '600': '6rem',
  '1000': '10rem',
};

export const spacingTheme = createGlobalTheme(':root', spacingContract, {
  spacing: spacingValues,
});

export const darkSpacingTheme = createGlobalTheme(
  '.dark-theme',
  spacingContract,
  {
    spacing: spacingValues,
  },
);
