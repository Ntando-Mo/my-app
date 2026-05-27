import React from 'react';
import './CustomersSay.css';

const CustomersSay = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>Testimonials</h2>
        
        <div className="testimonials-grid">
          {/* Review 1 */}
          <article className="review-card">
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <div className="reviewer-info">
              <div className="avatar">A</div>
              <h3>Alex M.</h3>
            </div>
            <p>"The Greek Salad was absolutely fantastic! Tastes exactly like the ones I had in Athens."</p>
          </article>

          {/* Review 2 */}
          <article className="review-card">
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <div className="reviewer-info">
              <div className="avatar" style={{backgroundColor: 'var(--primary-yellow)'}}>S</div>
              <h3>Sarah J.</h3>
            </div>
            <p>"Best Bruschetta in Chicago. The atmosphere is so welcoming and the owners are lovely."</p>
          </article>

          {/* Review 3 */}
          <article className="review-card">
            <div className="rating">⭐⭐⭐⭐</div>
            <div className="reviewer-info">
              <div className="avatar">D</div>
              <h3>David K.</h3>
            </div>
            <p>"Great food, great service. The lemon dessert is a must-try!"</p>
          </article>

          {/* Review 4 */}
          <article className="review-card">
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <div className="reviewer-info">
              <div className="avatar" style={{backgroundColor: 'var(--primary-yellow)'}}>L</div>
              <h3>Linda T.</h3>
            </div>
            <p>"I bring all my friends here. The authentic Mediterranean flavors never disappoint."</p>
          </article>
        </div>
        
      </div>
    </section>
  );
};

export default CustomersSay;