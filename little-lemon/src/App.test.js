import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const linkElement = screen.getByText("Book Now");
  expect(linkElement).toBeInTheDocument();
});
