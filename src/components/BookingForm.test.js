import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the static text "Choose date" in the BookingForm', () => {
  // 1. Create mock props so the component doesn't crash
  const mockAvailableTimes = ['17:00', '18:00'];
  const mockDispatch = jest.fn(); 

  // 2. Render the component with the mock props
  render(
    <BookingForm 
      availableTimes={mockAvailableTimes} 
      dispatch={mockDispatch} 
    />
  );

  // 3. Find the specific static text using the screen object
  const labelElement = screen.getByText("Choose date");

  // 4. Assert that the text actually exists in the virtual DOM
  expect(labelElement).toBeInTheDocument();
});