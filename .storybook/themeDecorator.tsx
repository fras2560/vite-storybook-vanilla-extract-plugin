import { Decorator } from '@storybook/react-vite';

import { tokens } from '../src/styles/tokens/index.css';

const ThemeDecorator: Decorator = (Story, options) => {
  return (
    <div
      className={
        options.globals.theme === 'dark' ? 'dark-theme' : 'light-theme'
      }
      style={{
        backgroundColor: 'transparent',
        border: `1px solid ${tokens.colors.border.default}`,
        borderRadius: '0.5rem',
        padding: '2rem',
      }}>
      <Story {...options} />
    </div>
  );
};

export default ThemeDecorator;
