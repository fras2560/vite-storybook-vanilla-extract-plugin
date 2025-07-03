import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ReactElement } from 'react';

const customRender = (ui: ReactElement) => render(ui);

// re-export everything
// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';

// override render method
export { customRender as render };
