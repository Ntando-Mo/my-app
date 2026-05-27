import React from 'react';
import BookingForm from './BookingForm'; // Import the form component

const BookingPage = () => {
  return (
    <main style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h1>Reserve a Table</h1>
      <p style={{ marginBottom: '30px' }}>Please fill out the form below to secure your spot at Little Lemon.</p>
      
      {/* Render the form here */}
      <BookingForm />
      
    </main>
  );
};

export default BookingPage;