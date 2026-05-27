import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./ConfirmedBooking.css";

const ConfirmedBooking = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  // force the page to the top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="confirmation-container">
      <div className="success-screen">
        <div className="success-icon">✓</div>
        <h2>Reservation Confirmed!</h2>

        {formData ? (
          <>
            <p className="success-text">
              Thank you, <strong>{formData.firstName}</strong>! Your table for{" "}
              {formData.guests} on {formData.date} at {formData.time} has been
              successfully booked.
            </p>
            <div className="email-notice">
              <span className="envelope-icon">✉</span>
              <p>
                A confirmation email has been sent to
                <br />
                <strong>{formData.email}</strong>
              </p>
            </div>
          </>
        ) : (
          <p className="success-text">
            Thank you! Your table has been successfully booked. We look forward
            to seeing you at Little Lemon.
          </p>
        )}

        <Link to="/">
          <button type="button" className="primary-btn mt-20 full-width">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
