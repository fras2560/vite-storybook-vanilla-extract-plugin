import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

import { colorTokens, darkColorTokens, lightColorTokens } from './color.css';
import { spacingTokens, themeSpacingTokens } from './spacing.css';

export const tokens = createThemeContract({
  colors: colorTokens,
  spacings: spacingTokens,
});

export const lightTheme = createGlobalTheme(':root', tokens, {
  colors: lightColorTokens,
  spacings: themeSpacingTokens,
});

export const darkThemeClass = createGlobalTheme('.dark-theme', tokens, {
  colors: darkColorTokens,
  spacings: themeSpacingTokens,
});
