import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
// Import the local API functions
import { fetchAPI, submitAPI } from "../api";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      const selectedDate = new Date(action.payload);
      return fetchAPI(selectedDate);
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed", { state: { formData } }); 
    }
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/booking"
        element={
          <BookingPage
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        }
      />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
};

export default Main;
