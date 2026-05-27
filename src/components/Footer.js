import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section>
        <h4>Contact Us</h4>
        <address>
          <p>123 Lemon Way<br />Chicago, IL 60602</p>
          <p><a href="tel:+15551234567">(555) 123-4567</a></p>
          <p><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
        </address>
      </section>
      
      <section>
        <h4>Connect With Us</h4>
        <ul>
          <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer">X (Twitter)</a></li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;