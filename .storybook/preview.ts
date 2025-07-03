import type { Preview } from '@storybook/react-vite';

import { ThemeMode } from '../src/styles/types/theme';

import ThemeDecorator from './themeDecorator';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: Object.values(ThemeMode),
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: ThemeMode.LIGHT,
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    layout: 'centered',

    chromatic: {
      disableSnapshot: true,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [ThemeDecorator],
};

export default preview;
