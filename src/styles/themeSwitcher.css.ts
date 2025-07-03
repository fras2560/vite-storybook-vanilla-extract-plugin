import { style } from '@vanilla-extract/css';

import { tokens } from './tokens/index.css';

export const switcher = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
  width: '10rem',
});

export const switcherButton = style({
  position: 'relative',
  width: '42px',
  height: '22px',
  backgroundColor: tokens.colors.text.secondary,
  borderRadius: '11px',
  transition: 'background-color 0.3s',
  selectors: {
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '2px',
      top: '2px',
      width: '18px',
      height: '18px',
      backgroundColor: tokens.colors.text.primary2,
      borderRadius: '50%',
      transition: 'transform 0.3s',
    },
    '&.active': {
      backgroundColor: tokens.colors.button.primaryActive,
    },
    '&.active::after': {
      transform: 'translateX(20px)',
    },
  },
});

export const sunIcon = style({
  color: tokens.colors.text.secondary,
});

export const moonIcon = style({
  color: tokens.colors.text.secondary,
});
