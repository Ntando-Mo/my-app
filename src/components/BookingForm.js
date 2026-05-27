import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"], dispatch, submitForm }) => {
  // Track the current step in the wizard (Date/Time -> Details)
  const [step, setStep] = useState(1);

  // Centralized state for all form inputs
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 2,
    occasion: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requests: ''
  });

  // Track validation error messages for specific fields
  const [errors, setErrors] = useState({});

  // Get today's date in YYYY-MM-DD format to prevent past bookings
  const today = new Date().toISOString().split('T')[0];

  // Check if the first step has the minimum required data to proceed
  const isStep1Valid = () => {
    return formData.date !== '' && formData.time !== '';
  };

  // Validate contact details using regex and length checks
  const validateStep2 = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-()]{10,}$/;

    if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters.";
    }
    if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters.";
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits).";
    }

    setErrors(newErrors);

    // Form is valid if the errors object remains empty
    return Object.keys(newErrors).length === 0;
  };

  // Proceed to the details step if date and time are selected
  const handleNext = (e) => {
    e.preventDefault();
    if (isStep1Valid()) {
      setStep(2);
    }
  };

  // Final submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep2()) {
      // Pass the collected data back to Main.js to trigger the redirect
      submitForm(formData);
    }
  };

  // Generic update function that also clears specific field errors as the user types
  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  // Ensure guest count stays within the 1-10 range when using the custom buttons
  const handleGuestChange = (operation) => {
    if (operation === 'add' && formData.guests < 10) {
      updateField('guests', formData.guests + 1);
    } else if (operation === 'subtract' && formData.guests > 1) {
      updateField('guests', formData.guests - 1);
    }
  };

  return (
    <div className="booking-wizard">

      <div className="progress-tracker">
        <div className={`step-pill ${step === 1 ? 'active' : 'completed'}`}>Date & Time</div>
        <div className={`step-pill ${step === 2 ? 'active' : ''}`}>Your Details</div>
      </div>

      <form onSubmit={step === 1 ? handleNext : handleSubmit} noValidate>

        {/* --- STEP 1: DATE & TIME --- */}
        {step === 1 && (
          <div className="step-content">
            <h2>Book a Table</h2>
            <p className="subtitle">Fill in your reservation details below</p>

            <label htmlFor="res-date">Select Date <span className="required">*</span></label>
            <input
              type="date"
              id="res-date"
              className="styled-input"
              value={formData.date}
              min={today}
              onChange={(e) => {
                updateField('date', e.target.value);
                if(dispatch) dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
              }}
            />

            <label>Select Time <span className="required">*</span></label>
            <div className="time-grid">
              {availableTimes.map((t) => (
                <button
                  type="button"
                  key={t}
                  className={`time-pill ${formData.time === t ? 'selected' : ''}`}
                  onClick={() => updateField('time', t)}
                  aria-label={`Select time ${t}`}
                >
                  {t}
                </button>
              ))}
            </div>

            <label>Number of Guests <span className="required">*</span></label>
            <div className="guest-counter">
              <button type="button" onClick={() => handleGuestChange('subtract')} className="counter-btn" aria-label="Decrease guests">-</button>

              <input
                type="number"
                className="guest-input"
                value={formData.guests}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') updateField('guests', '');
                  else updateField('guests', parseInt(val));
                }}
                onBlur={() => {
                  // Prevent blank or invalid numbers if the user clicks away
                  if (formData.guests === '' || formData.guests < 1) updateField('guests', 1);
                  else if (formData.guests > 10) updateField('guests', 10);
                }}
                min="1"
                max="10"
                aria-label="Enter number of guests"
              />

              <button type="button" onClick={() => handleGuestChange('add')} className="counter-btn" aria-label="Increase guests">+</button>
            </div>

            <label htmlFor="occasion">Occasion (optional)</label>
            <select id="occasion" className="styled-input" value={formData.occasion} onChange={(e) => updateField('occasion', e.target.value)}>
              <option value="">Select occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
            </select>

            <button
              type="button"
              className="primary-btn full-width mt-20"
              onClick={handleNext}
              disabled={!isStep1Valid()}
            >
              Next →
            </button>
          </div>
        )}

        {/* --- STEP 2: CONTACT DETAILS --- */}
        {step === 2 && (
          <div className="step-content">
            <h2>Your Details</h2>
            <p className="subtitle">Please fill in your information below</p>

            <div className="summary-box">
              {formData.date} | {formData.time} | {formData.guests} Guests
            </div>

            <label htmlFor="firstName">First Name <span className="required">*</span></label>
            <input
              type="text"
              id="firstName"
              className={`styled-input ${errors.firstName ? 'input-error' : ''}`}
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={(e) => updateField('firstName', e.target.value)}
            />
            {errors.firstName && <p className="error-text">{errors.firstName}</p>}

            <label htmlFor="lastName">Last Name <span className="required">*</span></label>
            <input
              type="text"
              id="lastName"
              className={`styled-input ${errors.lastName ? 'input-error' : ''}`}
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={(e) => updateField('lastName', e.target.value)}
            />
            {errors.lastName && <p className="error-text">{errors.lastName}</p>}

            <label htmlFor="email">Email Address <span className="required">*</span></label>
            <input
              type="email"
              id="email"
              className={`styled-input ${errors.email ? 'input-error' : ''}`}
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <label htmlFor="phone">Phone Number <span className="required">*</span></label>
            <input
              type="tel"
              id="phone"
              className={`styled-input ${errors.phone ? 'input-error' : ''}`}
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}

            <label htmlFor="requests">Special Requests (optional)</label>
            <textarea
              id="requests"
              className="styled-input"
              rows="3"
              placeholder="Enter special requests"
              value={formData.requests}
              onChange={(e) => updateField('requests', e.target.value)}
            ></textarea>

            <div className="button-group mt-20">
              <button type="button" className="secondary-btn" onClick={() => setStep(1)}>← Back</button>
              <button type="submit" className="primary-btn">
                Confirm Reservation
              </button>
            </div>
          </div>
        )}

      </form>
    </div>
  );
};

export default BookingForm;