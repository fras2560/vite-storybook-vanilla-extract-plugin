import { createThemeContract } from '@vanilla-extract/css';

import { spacingContract } from '../core';

export const spacingTokens = createThemeContract({
  badge: {
    width: null,
    height: null,
    padding: null,
  },
  icon: {
    small: null,
    medium: null,
    large: null,
  },
  line: {
    divider: null,
    buttonBorder: null,
  },
  cornerRadius: {
    default: null,
    badge: null,
    toggle: null,
  },
  gap: {
    small: null,
    medium: null,
    large: null,
  },
  padding: {
    none: null,
    extraSmall: null,
    small: null,
    medium: null,
    large: null,
  },
});

export const themeSpacingTokens = {
  badge: {
    width: spacingContract.spacing['0375'],
    height: spacingContract.spacing['0375'],
    padding: spacingContract.spacing['025'],
  },
  icon: {
    small: spacingContract.spacing['100'],
    medium: spacingContract.spacing['150'],
    large: spacingContract.spacing['200'],
  },
  line: {
    divider: spacingContract.spacing['0063'],
    buttonBorder: spacingContract.spacing['0063'],
  },
  cornerRadius: {
    default: spacingContract.spacing['025'],
    badge: spacingContract.spacing['075'],
    toggle: spacingContract.spacing['075'],
  },
  gap: {
    small: spacingContract.spacing['0125'],
    medium: spacingContract.spacing['025'],
    large: spacingContract.spacing['050'],
  },
  padding: {
    none: spacingContract.spacing['000'],
    extraSmall: spacingContract.spacing['025'],
    small: spacingContract.spacing['050'],
    medium: spacingContract.spacing['075'],
    large: spacingContract.spacing['100'],
  },
};
