import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css'; 
import heroImage from '../assets/restauranfood.jpg';

const CallToAction = () => {
  return (
    <section className="hero-section">
      {/* Container centers the content, but the section provides the full-width background */}
      <div className="container hero-container">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button className="reserve-btn">Reserve a Table</button>
          </Link>
        </div>
        
        <div className="hero-image-box">
          <img src={heroImage} alt="Chef holding a tray of food" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;