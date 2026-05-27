import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        <div className="footer-brand">
          <div className="logo-wrapper">
            <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
          </div>
          <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>

        <div className="footer-links">
          <h4>Sitemap</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>123 Lemon Street<br/>Chicago, IL 60602</p>
          <p><strong>Phone:</strong> (312) 555-0199</p>
          <p><strong>Email:</strong> info@littlelemon.com</p>
        </div>

        <div className="footer-socials">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">X (Twitter)</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;