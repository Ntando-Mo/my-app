import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"], dispatch, submitForm }) => {
  const [step, setStep] = useState(1);

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

  // Get today's date to prevent past bookings
  const today = new Date().toISOString().split('T')[0];

  // --- VALIDATION LOGIC ---
  const isStep1Valid = () => {
    return formData.date !== '' && formData.time !== '';
  };

  const isStep2Valid = () => {
    // Regex for standard email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regex for phone numbers (allows formats like 1234567890, 123-456-7890, (123) 456-7890)
    const phoneRegex = /^[\d\s\-()]{10,}$/; 

    return (
      formData.firstName.trim().length >= 2 &&
      formData.lastName.trim().length >= 2 &&
      emailRegex.test(formData.email) &&
      phoneRegex.test(formData.phone)
    );
  };

  // --- HANDLERS ---
  const handleNext = (e) => {
    e.preventDefault();
    if (isStep1Valid()) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isStep2Valid()) {
      submitForm(formData);
    }
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
        <div className="step-pill">Confirm</div>
      </div>

      <form onSubmit={step === 1 ? handleNext : handleSubmit}>
        
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
              <div className="guest-number">{formData.guests}</div>
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
              className="styled-input" 
              placeholder="Enter first name" 
              value={formData.firstName} 
              onChange={(e) => updateField('firstName', e.target.value)} 
            />

            <label htmlFor="lastName">Last Name <span className="required">*</span></label>
            <input 
              type="text" 
              id="lastName"
              className="styled-input" 
              placeholder="Enter last name" 
              value={formData.lastName} 
              onChange={(e) => updateField('lastName', e.target.value)} 
            />

            <label htmlFor="email">Email Address <span className="required">*</span></label>
            <input 
              type="email" 
              id="email"
              className="styled-input" 
              placeholder="Enter email address" 
              value={formData.email} 
              onChange={(e) => updateField('email', e.target.value)} 
            />

            <label htmlFor="phone">Phone Number <span className="required">*</span></label>
            <input 
              type="tel" 
              id="phone"
              className="styled-input" 
              placeholder="Enter phone number" 
              value={formData.phone} 
              onChange={(e) => updateField('phone', e.target.value)} 
            />

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
              <button 
                type="submit" 
                className="primary-btn"
                disabled={!isStep2Valid()}
              >
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