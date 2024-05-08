import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import NavLink and Link
import './Navbar.css';
import p from "../asserts/p.png";
import fav from "../asserts/fav.png"
import cartt from "../asserts/cartt.png"
import LogoutConfirmationModal from './LogoutConfirmationModal';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container flex-holder">
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ml-auto">
            <NavLink className="nav-link btn" to="/">Home</NavLink>
            <NavLink className="nav-link btn" to="/about">About</NavLink>
            <NavLink className="nav-link btn" to="/features">Property</NavLink>
            <NavLink className="nav-link btn" to="/contact">Contact</NavLink>
            <NavLink className="nav-link btn" to="/resource">Resource</NavLink>
            {isLoggedIn ? (
              <button className="nav-link btn btn-primary" onClick={handleLogout}>Logout</button>
            ) : (
              <NavLink className="nav-link btn" to="/signin" onClick={handleSignIn}>Signin</NavLink>
            )}
              {/* <img src={fav} alt="Favorite" className="navbar-icon" />
            </NavLink>
            
            <NavLink to="/cart" className="nav-link">
              <img src={cartt} alt="Cart" className="navbar-icon" />
            </NavLink>
             */}
          </div>
        </div>

      </div>
      {showModal && <LogoutConfirmationModal handleLogout={handleLogout} handleClose={() => setShowModal(false)} />}
    </nav>
  );
};

export default Navbar;
