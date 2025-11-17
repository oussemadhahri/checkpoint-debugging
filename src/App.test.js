import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the React debugging title', () => {
  render(<App />);
  expect(screen.getByText(/react debugging practice/i)).toBeInTheDocument();
});

test('renders the counter component controls', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /increment/i })).toBeInTheDocument();
});