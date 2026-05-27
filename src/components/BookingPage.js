import React from "react";
import BookingForm from "./BookingForm";

// Add submitForm to the props being accepted
const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <main style={{ padding: "40px 20px", textAlign: "center" }}>
      <h1>Reserve a Table</h1>
      <p style={{ marginBottom: "30px" }}>
        Please fill out the form below to secure your spot at Little Lemon.
      </p>

      {/* Pass submitForm down to the form component */}
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
};

export default BookingPage;
