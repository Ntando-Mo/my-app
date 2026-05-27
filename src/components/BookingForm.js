import React, { useState } from 'react';

// Step 1: Accept availableTimes and dispatch as props
const BookingForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // NOTE: We deleted the local availableTimes useState from here!

  // Step 2: Dispatch the state change when the date field is changed
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    // Send the new date to the reducer
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Details:");
    console.log({ date, time, guests, occasion });
    alert("Form submitted! Check the console for details.");
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px', margin: '0 auto' }} onSubmit={handleSubmit}>
      
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={handleDateChange} /* Updated to use the new handler */
        required 
      />

      <label htmlFor="res-time">Choose time</label>
      <select 
        id="res-time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)}
      >
        {/* This now pulls directly from the availableTimes prop! */}
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        placeholder="1" 
        min="1" 
        max="10" 
        id="guests" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
      />

      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" aria-label="Submit Reservation" />
    </form>
  );
};

export default BookingForm;