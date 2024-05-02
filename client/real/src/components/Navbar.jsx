import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import NavLink and Link
import './Navbar.css';
import p from "../asserts/p.png";
import favorite from "../asserts/favourite.png";
import cart from "../asserts/cart new.png";
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
      <div className="container">
        <NavLink className="navbar-brand" to="/">
  
        </NavLink>

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
            <div className="navbar-icons-container d-flex align-items-center">
              {/* Link Favorite icon to "/fav" */}
              <NavLink to="/Favorites" className="nav-link btn">
                <img src={favorite} alt="Favorite" className="navbar-icon" />
              </NavLink>
              {/* Link Cart icon to "/cart" */}
              <NavLink to="/cart" className="nav-link btn">
                <img src={cart} alt="Cart" className="navbar-icon" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {showModal && <LogoutConfirmationModal handleLogout={handleLogout} handleClose={() => setShowModal(false)} />}
    </nav>
  );
};

export default Navbar;
