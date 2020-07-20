import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders pokedex title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/pokedex/i);
  expect(titleElement).toBeInTheDocument();
});
