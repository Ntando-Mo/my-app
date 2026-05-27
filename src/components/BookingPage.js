import React from 'react';
import BookingForm from './BookingForm';

// Step 1: Accept the props from Main
const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <main style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h1>Reserve a Table</h1>
      <p style={{ marginBottom: '30px' }}>Please fill out the form below to secure your spot at Little Lemon.</p>
      
      {/* Step 1: Pass the props down to BookingForm */}
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      
    </main>
  );
};

export default BookingPage;