import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import p from "../asserts/p.png";
import circle from "../asserts/circle.avif";
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
      {/* <div className='logo'>
        <img src={circle} alt='logo' />
      </div> */}
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
         {/* Favorite button */}
<NavLink to="/favorite" className="nav-link btn" style={{ marginLeft: '10px' }}>
  <i className="fas fa-heart"></i> {/* Assuming you're using Font Awesome for icons */}
</NavLink>
{/* Cart button */}
<NavLink to="/cart" className="nav-link btn" style={{ marginLeft: '10px' }}>
  <i className="fas fa-shopping-cart"></i> {/* Assuming you're using Font Awesome for icons */}
</NavLink>

        </div>
      </div>
      {showModal && <LogoutConfirmationModal handleLogout={handleLogout} handleClose={() => setShowModal(false)} />}
    </nav>
  );
};

export default Navbar;
