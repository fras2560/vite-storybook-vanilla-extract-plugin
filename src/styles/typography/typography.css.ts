import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { tokens } from '../tokens/index.css';

const labelBase = style({
  fontFamily: 'Inter, sans-serif',
  fontSize: '1.0rem',
  lineHeight: '1.5rem',
  letterSpacing: '0px',
  margin: 0,
  overflow: 'hidden',
  verticalAlign: 'top',
  color: tokens.colors.text.primary,
});

const smallLabelBase = style({
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.625rem',
  lineHeight: '1.0rem',
  letterSpacing: '0.00938rem', // 1% of 15px
  margin: 0,
  overflow: 'hidden',
  verticalAlign: 'top',
  color: tokens.colors.text.primary,
});

export const labelRecipe = recipe({
  base: labelBase,
  variants: {
    disabled: {
      true: {
        color: tokens.colors.button.disabled,
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const labelSmallRecipe = recipe({
  base: smallLabelBase,
});
