import * as React from 'react';
import { render } from '@testing-library/react';
import App from '../src/main/app/app';
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});
