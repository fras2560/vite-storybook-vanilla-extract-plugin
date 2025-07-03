import { style } from '@vanilla-extract/css';

export const parentContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '1rem',
});
