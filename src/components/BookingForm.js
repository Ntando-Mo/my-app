import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Step 1: Get today's date in YYYY-MM-DD format to prevent past bookings
  const today = new Date().toISOString().split('T')[0];

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion
    };
    submitForm(formData);
  };

  // Step 2: React Client-Side Validation
  // This function returns true ONLY if all form conditions are met
  const isFormValid = () => {
    return (
      date !== '' && 
      time !== '' && 
      guests >= 1 && 
      guests <= 10 && 
      occasion !== ''
    );
  };

  const timesToMap = availableTimes || [];

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px', margin: '0 auto' }} onSubmit={handleSubmit}>
      
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={handleDateChange} 
        min={today} /* HTML5 Validation: Cannot pick a past date */
        required /* HTML5 Validation: Field cannot be empty */
      />

      <label htmlFor="res-time">Choose time</label>
      <select 
        id="res-time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {timesToMap.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        placeholder="1" 
        min="1" /* HTML5 Validation: Minimum 1 guest */
        max="10" /* HTML5 Validation: Maximum 10 guests */
        id="guests" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {/* Step 2: Disable the button if the React validation fails */}
      <input 
        type="submit" 
        value="Make Your Reservation" 
        disabled={!isFormValid()} 
        aria-label="Submit Reservation" 
        style={{ 
          cursor: isFormValid() ? 'pointer' : 'not-allowed',
          opacity: isFormValid() ? 1 : 0.5 
        }}
      />
    </form>
  );
};

export default BookingForm;