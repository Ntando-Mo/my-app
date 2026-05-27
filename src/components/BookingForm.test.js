import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

// --- ORIGINAL STATIC TEXT TEST ---
test('Renders the static text "Choose date" in the BookingForm', () => {
  const mockAvailableTimes = ['17:00', '18:00'];
  const mockDispatch = jest.fn(); 
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

// --- VALIDATION TESTS ---
describe('BookingForm Validation', () => {
  // Shared mock props for all tests in this block
  const mockAvailableTimes = ['17:00', '18:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  // Step 1: Validate HTML5 attributes
  test('HTML5 validation attributes are applied to the date input', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    
    const dateInput = screen.getByLabelText(/Choose date/i);
    
    // Check that it is required
    expect(dateInput).toBeRequired();
    // Check that it has a min attribute to prevent past dates
    expect(dateInput).toHaveAttribute('min');
  });

  test('HTML5 validation attributes are applied to the guests input', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  // Step 2: Validate JavaScript Valid/Invalid states
  test('Submit button is disabled when form is invalid (empty date)', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    
    // By default, the date state is empty, making the form invalid
    const submitButton = screen.getByRole('button', { name: /Submit Reservation/i });
    
    // The button should be disabled
    expect(submitButton).toBeDisabled();
  });

  test('Submit button is enabled when all fields are valid', () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

    const dateInput = screen.getByLabelText(/Choose date/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const submitButton = screen.getByRole('button', { name: /Submit Reservation/i });

    // Simulate the user typing in a valid date and valid number of guests
    fireEvent.change(dateInput, { target: { value: '2026-06-15' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });

    // Because time, occasion, and guests have valid defaults, and we just filled the date, the form is now 100% valid.
    expect(submitButton).toBeEnabled();
  });
});