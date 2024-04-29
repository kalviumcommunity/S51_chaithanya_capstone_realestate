import React from 'react';
import "./Footer.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <h3>About Us</h3>
          <p>
            Dream House Realty is your trusted partner in finding your dream home. We specialize in luxury properties, beachfront homes, and city apartments.
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul className="footer-nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/property">Property</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            Dream House Realty <br />
            19, Ranga Street, <br />
            Dreamville, CA 12 <br />
            Chennai <br />
            Phone: 7010965635<br />
            Email: dreamhouserealty@gmail.com
          </p>
        </div>
        <div className="footer-buy-sell">
          <h3>Buy & Sell with Us</h3>
          <p>
            Whether you're looking to buy or sell, Dream House Realty is here to assist you every step of the way. Contact us today to get started.
          </p>
        </div>
        <div className="footer-faq">
          <h3>FAQ</h3>
          <p>Have questions? Check out our frequently asked questions for answers or contact us for assistance.</p>
          <ul className="footer-faq-list">
            <li><a href="/faq">FAQ Page</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to receive updates on the latest properties, real estate trends, and special offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com/dreamhouserealty" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://twitter.com/dreamhouserealty" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/dreamhouserealty/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Dream House Realty. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
