import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

// Step 2: Create initializeTimes function
export const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

// Step 2: Create updateTimes reducer function
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, as per instructions, return the same times regardless of the date
      return state;
    default:
      return state;
  }
};

const Main = () => {
  // Step 1 & 2: Change availableTimes to a reducer
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Pass the state and dispatch function down as props */}
      <Route 
        path="/booking" 
        element={
          <BookingPage 
            availableTimes={availableTimes} 
            dispatch={dispatch} 
          />
        } 
      />
    </Routes>
  );
};

export default Main;