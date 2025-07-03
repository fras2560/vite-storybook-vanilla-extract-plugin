import { createThemeContract } from '@vanilla-extract/css';

import { colorContract } from '../core';

export const colorTokens = createThemeContract({
  background: {
    background: null,
    titleBar: null,
  },
  border: {
    buttonPrimary: null,
    buttonSecondary: null,
    buttonTertiary: null,
    buttonDisabled: null,
    buttonDestructive: null,

    interactive: null,
    boxSelection: null,
    default: null,
  },
  focus: null,
  'focus-insert': null,
  icon: {
    active: null,
    'active-hover': null,
    secondary: null,
  },
  support: {
    disabled: {
      active: null,
      default: null,
      hover: null,
    },
    done: {
      active: null,
      default: null,
      hover: null,
    },
    error: {
      active: null,
      default: null,
      hover: null,
    },
    success: {
      active: null,
      default: null,
      hover: null,
    },
    update: {
      active: null,
      default: null,
      hover: null,
    },
    warning: {
      active: null,
      default: null,
      hover: null,
    },
  },
  text: {
    badge: null,
    primary: null,
    primary2: null,
    secondary: null,
    checkbox: null,

    buttonPrimary: null,
    buttonSecondary: null,
    buttonTertiary: null,
    buttonDestructive: null,
    buttonBorderless: null,
    buttonTextButton: null,
    buttonDisabled: null,
  },
  button: {
    primary: null,
    primaryHover: null,
    primaryActive: null,

    secondary: null,
    secondaryHover: null,
    secondaryActive: null,

    tertiary: null,
    tertiaryHover: null,
    tertiaryActive: null,

    destructive: null,
    destructiveHover: null,
    destructiveActive: null,

    borderless: null,
    borderlessHover: null,
    borderlessActive: null,

    textbutton: null,
    textbuttonHover: null,
    textbuttonActive: null,

    disabled: null,
  },
});

export const lightColorTokens = {
  background: {
    background: colorContract.grey[200],
    titleBar: colorContract.grey[900],
  },
  border: {
    buttonPrimary: colorContract.silkenJade[500],
    buttonSecondary: colorContract.silkenJade[500],
    buttonTertiary: colorContract.grey[300],
    buttonDisabled: colorContract.grey[300],
    buttonDestructive: colorContract.coralRed[500],
    interactive: colorContract.silkenJade[500],
    boxSelection: colorContract.grey[300],
    default: colorContract.grey[300],
  },
  focus: colorContract.silkenJade[500],
  'focus-insert': colorContract.grey[100],
  icon: {
    active: colorContract.silkenJade[500],
    'active-hover': colorContract.silkenJade[600],
    secondary: colorContract.grey[600],
  },
  support: {
    disabled: {
      active: colorContract.grey[500],
      default: colorContract.grey[500],
      hover: colorContract.grey[500],
    },
    done: {
      active: colorContract.cerulean[500],
      default: colorContract.cerulean[500],
      hover: colorContract.cerulean[500],
    },
    error: {
      active: colorContract.coralRed[700],
      default: colorContract.coralRed[500],
      hover: colorContract.coralRed[600],
    },
    success: {
      active: colorContract.silkenJade[800],
      default: colorContract.silkenJade[500],
      hover: colorContract.silkenJade[700],
    },
    update: {
      active: colorContract.corona[700],
      default: colorContract.corona[500],
      hover: colorContract.corona[600],
    },
    warning: {
      active: colorContract.corona[700],
      default: colorContract.corona[500],
      hover: colorContract.corona[600],
    },
  },
  text: {
    badge: colorContract.grey[100],
    primary: colorContract.grey[900],
    primary2: colorContract.grey[100],
    secondary: colorContract.grey[600],
    checkbox: colorContract.grey[900],

    buttonPrimary: colorContract.grey[100],
    buttonSecondary: colorContract.silkenJade[500],
    buttonTertiary: colorContract.grey[900],
    buttonDestructive: colorContract.coralRed[500],
    buttonBorderless: colorContract.grey[900],
    buttonTextButton: colorContract.grey[100],
    buttonDisabled: colorContract.grey[500],
  },
  button: {
    primary: colorContract.silkenJade[500],
    primaryHover: colorContract.silkenJade[700],
    primaryActive: colorContract.silkenJade[800],

    secondary: colorContract.grey[100],
    secondaryHover: colorContract.silkenJade[100],
    secondaryActive: colorContract.silkenJade[200],

    tertiary: colorContract.grey[100],
    tertiaryHover: colorContract.grey[300],
    tertiaryActive: colorContract.grey[400],

    destructive: colorContract.grey[100],
    destructiveHover: colorContract.coralRed[500],
    destructiveActive: colorContract.coralRed[600],

    borderless: colorContract.grey[100],
    borderlessHover: colorContract.grey[300],
    borderlessActive: colorContract.grey[400],

    textbutton: 'transparent',
    textbuttonHover: colorContract.grey[300],
    textbuttonActive: 'transparent',

    disabled: colorContract.grey[300],
  },
};

export const darkColorTokens = {
  background: {
    background: colorContract.grey[900],
    titleBar: colorContract.grey[900],
  },
  border: {
    buttonPrimary: colorContract.lightSea[500],
    buttonSecondary: colorContract.lightSea[300],
    buttonTertiary: colorContract.grey[700],
    buttonDisabled: colorContract.grey[700],
    buttonDestructive: colorContract.coralRed[500],
    interactive: colorContract.lightSea[300],
    boxSelection: colorContract.grey[700],
    default: colorContract.grey[700],
  },
  focus: colorContract.lightSea[300],
  'focus-insert': colorContract.grey[900],
  icon: {
    active: colorContract.lightSea[500],
    'active-hover': colorContract.lightSea[600],
    secondary: colorContract.grey[400],
  },
  support: {
    disabled: {
      active: colorContract.grey[600],
      default: colorContract.grey[600],
      hover: colorContract.grey[600],
    },
    done: {
      active: colorContract.cerulean[500],
      default: colorContract.cerulean[500],
      hover: colorContract.cerulean[500],
    },
    error: {
      active: colorContract.coralRed[700],
      default: colorContract.coralRed[500],
      hover: colorContract.coralRed[600],
    },
    success: {
      active: colorContract.lightSea[800],
      default: colorContract.lightSea[500],
      hover: colorContract.lightSea[700],
    },
    update: {
      active: colorContract.corona[700],
      default: colorContract.corona[500],
      hover: colorContract.corona[600],
    },
    warning: {
      active: colorContract.corona[700],
      default: colorContract.corona[500],
      hover: colorContract.corona[600],
    },
  },
  text: {
    badge: colorContract.grey[100],
    primary: colorContract.grey[100],
    primary2: colorContract.grey[100],
    secondary: colorContract.grey[400],
    checkbox: colorContract.grey[100],

    buttonPrimary: colorContract.grey[100],
    buttonSecondary: colorContract.lightSea[300],
    buttonTertiary: colorContract.grey[100],
    buttonDestructive: colorContract.coralRed[500],
    buttonBorderless: colorContract.grey[100],
    buttonTextButton: colorContract.grey[100],
    buttonDisabled: colorContract.grey[500],
  },
  button: {
    primary: colorContract.lightSea[500],
    primaryHover: colorContract.lightSea[700],
    primaryActive: colorContract.lightSea[800],

    secondary: colorContract.grey[900],
    secondaryHover: colorContract.lightSea[900],
    secondaryActive: colorContract.lightSea[800],

    tertiary: colorContract.grey[900],
    tertiaryHover: colorContract.grey[700],
    tertiaryActive: colorContract.grey[600],

    destructive: colorContract.grey[900],
    destructiveHover: colorContract.coralRed[500],
    destructiveActive: colorContract.coralRed[600],

    borderless: colorContract.grey[900],
    borderlessHover: colorContract.grey[700],
    borderlessActive: colorContract.grey[600],

    textbutton: 'transparent',
    textbuttonHover: colorContract.grey[700],
    textbuttonActive: 'transparent',

    disabled: colorContract.grey[700],
  },
};
