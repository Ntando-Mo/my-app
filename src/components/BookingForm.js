import React, { useState } from 'react';

const BookingForm = () => {
  // Step 3: Define state variables for each field
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Hardcoded state array for available times (as per instructions)
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Details:");
    console.log({ date, time, guests, occasion });
    alert("Form submitted! Check the console for details.");
  };

  return (
    // Step 2: Form structure converted to JSX
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px', margin: '0 auto' }} onSubmit={handleSubmit}>
      
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
      />

      <label htmlFor="res-time">Choose time</label>
      <select 
        id="res-time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)}
      >
        {/* Mapping through the availableTimes state array */}
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