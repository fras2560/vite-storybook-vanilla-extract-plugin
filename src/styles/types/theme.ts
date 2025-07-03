export const ThemeMode = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type ThemeMode = (typeof ThemeMode)[keyof typeof ThemeMode];

export const THEME_VARIANTS = [
  'primary',
  'secondary',
  'tertiary',
  'destructive',
  'borderless',
  'textbutton',
] as const;

export type ThemeVariant = (typeof THEME_VARIANTS)[number];

export const SUPPORT_VARIANTS = [
  'disabled',
  'done',
  'error',
  'success',
  'update',
  'warning',
] as const;

export type SupportVariant = (typeof SUPPORT_VARIANTS)[number];
