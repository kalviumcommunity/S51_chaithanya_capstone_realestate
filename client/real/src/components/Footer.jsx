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
            19,ranga street, <br />
            Dreamville, CA 12 <br />
            Chennai <br />
            Phone: 7010965635 / 044-22234138<br />
            Email:dreamhouserealty@gamil.com
          </p>
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
