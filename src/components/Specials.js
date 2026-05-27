import React from 'react';
import './Specials.css';
import greekSalad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon dessert.jpg';

const Specials = () => {
  return (
    <section className="container specials-section">
      <div className="specials-header">
        <h2>This weeks specials!</h2>
        <button className="online-menu-btn">Online Menu</button>
      </div>

      <div className="cards-container">
        {/* Greek Salad Card */}
        <article className="dish-card">
          <img src={greekSalad} alt="Greek Salad" />
          <div className="dish-content">
            <div className="dish-header">
              <h3>Greek Salad</h3>
              <span className="dish-price">$12.99</span>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.</p>
            <button className="order-btn">Order a delivery</button>
          </div>
        </article>

        {/* Bruschetta Card */}
        <article className="dish-card">
          <img src={bruchetta} alt="Bruschetta" />
          <div className="dish-content">
            <div className="dish-header">
              <h3>Bruschetta</h3>
              <span className="dish-price">$5.99</span>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with olive oil.</p>
            <button className="order-btn">Order a delivery</button>
          </div>
        </article>

        {/* Lemon Dessert Card */}
        <article className="dish-card">
          <img src={lemonDessert} alt="Lemon Dessert" />
          <div className="dish-content">
            <div className="dish-header">
              <h3>Lemon Dessert</h3>
              <span className="dish-price">$5.00</span>
            </div>
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced.</p>
            <button className="order-btn">Order a delivery</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Specials;