import { render, screen } from '@testing-library/react';
import App from './App';

test('renders signup form', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /signup/i })).toBeInTheDocument(); 
  expect(screen.getByLabelText(/username:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email:/i)).toBeInTheDocument(); 
  expect(screen.getByLabelText(/password:/i)).toBeInTheDocument(); 
  expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
});