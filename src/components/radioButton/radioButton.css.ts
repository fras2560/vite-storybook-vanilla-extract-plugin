import { recipe } from '@vanilla-extract/recipes';

import { tokens } from '../../styles/tokens/index.css';

export const radioButton = recipe({
  base: {
    appearance: 'none',
    backgroundColor: 'transparent',
    border: '0.15rem solid currentColor',
    borderRadius: '50%',
    color: 'currentColor',
    display: 'grid',
    font: 'inherit',
    height: tokens.spacings.icon.medium,

    margin: 0,
    placeContent: 'center',
    width: tokens.spacings.icon.medium,
    WebkitAppearance: 'none',
    ':before': {
      backgroundColor: 'CanvasText',
      borderRadius: '50%',
      borderColor: 'transparent',
      boxShadow: `inset 1rem 1rem ${tokens.colors.icon.active}`,
      content: '',
      height: '0.75rem',
      width: '0.75rem',
      transform: 'scale(0)',
      transition: '120ms transform ease-in-out',
    },
    ':checked': {
      borderColor: tokens.colors.icon.active,
    },
    ':disabled': {
      borderColor: tokens.colors.button.disabled,
      boxShadow: 'unset',
    },

    ':focus-visible': {
      outline: 'none',
    },
    selectors: {
      '&:checked::before': {
        transform: 'scale(1)',
      },
      '&:disabled::before': {
        boxShadow: `inset 1rem 1rem ${tokens.colors.button.disabled}`,
      },
      '&:disabled::hover': {
        backgroundColor: 'none',
      },
    },
  },
});

export const radioButtonBox = recipe({
  base: {
    padding: '2px',
    borderRadius: tokens.spacings.cornerRadius.default,
    ':disabled': {
      backgroundColor: 'unset',
    },
    ':hover': {
      backgroundColor: tokens.colors.button.borderlessHover,
    },
    selectors: {
      '&:has(:focus-visible)': {
        outline: `2px solid ${tokens.colors.icon.active}`,
      },
      '&:has(:disabled)': {
        backgroundColor: 'unset',
      },
    },
  },
  variants: {
    focusVisible: {
      true: {
        outline: `2px solid ${tokens.colors.icon.active}`,
      },
    },
  },
  defaultVariants: {
    focusVisible: false,
  },
});

export const holder = recipe({
  base: {
    alignItems: 'center',
    display: 'flex',
    gap: tokens.spacings.gap.large,
    position: 'relative',
    paddingRight: '2px',
  },
});
