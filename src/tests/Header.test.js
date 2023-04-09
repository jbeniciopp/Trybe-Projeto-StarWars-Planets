import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders the header text', () => {
  render(<Header />);
  const headerText = screen.getByText(/STAR WARS/i);
  expect(headerText).toBeInTheDocument();
});
