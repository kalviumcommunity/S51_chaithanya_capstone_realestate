import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import backgroundImage from "../asserts/bg.jpeg"


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundImage: 'url("/src/asserts/bg.jpeg")' }}>
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="n avbar-toggler-icon"></span>
        </button>
        <div className="navbar-header">
    <h1 className="title">DreamHome Discoveries</h1>
</div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link btn btn-link" to="/" onClick={() => console.log('Home clicked')}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-link" to="/about" onClick={() => console.log('About clicked')}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-link" to="/features" onClick={() => console.log('Features clicked')}>Property</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-link" to="/contact" onClick={() => console.log('Contact clicked')}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-primary" to="/signin" onClick={() => console.log('Sign In clicked')}>Sign In</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link btn btn-success" to="/signup" onClick={() => console.log('Sign Up clicked')}>Sign Up</Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="navbar-description">
        <p>Welcome to your ultimate real estate destination🤝! Explore curated listings, personalized service, and expert guidance. Find your dream home with us</p>
      </div>
    </nav>
  );
};

export default Navbar;
