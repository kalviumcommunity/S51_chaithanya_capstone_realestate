// Import necessary dependencies and components
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../asserts/logo.jpg';
import favorite from "../asserts/favourite.png"; 
import cart from "../asserts/cart new.png";
import LogoutConfirmationModal from './LogoutConfirmationModal';

// Define the Navbar component
const Navbar = () => {
  // Define state variables and event handlers
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => { 
    // No need for window.confirm here
    setShowModal(true); // Open the modal for confirmation
  };

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  // Return the JSX for the Navbar component
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
          DreamHouse
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link btn btn-link" exact to="/" activeClassName="active" onClick={() => console.log('Home clicked')}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link btn btn-link" to="/about" activeClassName="active" onClick={() => console.log('About clicked')}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link btn btn-link" to="/features" activeClassName="active" onClick={() => console.log('Features clicked')}>Property</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link btn btn-link" to="/contact" activeClassName="active" onClick={() => console.log('Contact clicked')}>Contact</NavLink>
            </li>
            {/* Add Resource Center link */}
            <li className="nav-item">
              <NavLink className="nav-link btn btn-link" to="/Resource" activeClassName="active">Resource</NavLink>
            </li>
            {/* Conditionally render Sign In/Logout button */}
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="nav-link btn btn-primary" onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link btn btn-primary" to="/signin" onClick={handleSignIn}>Sign In</NavLink>
              </li>
            )}
            {/* Navbar icons container */}
            <li className="nav-item">
              <div className="navbar-icons-container">
                <NavLink to="/favourite">
                  <img src={favorite} alt="Favorite" className="nav-link btn btn-link navbar-icon" />
                </NavLink>
                <NavLink to="/cart">
                  <img src={cart} alt="Cart" className="nav-link btn btn-link navbar-icon" />
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Render LogoutConfirmationModal if showModal is true */}
      {showModal && <LogoutConfirmationModal handleLogout={handleLogout} handleClose={() => setShowModal(false)} />}
    </nav>
  );
};

// Export the Navbar component
export default Navbar;
