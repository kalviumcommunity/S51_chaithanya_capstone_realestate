import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import p from "../asserts/p.png";
import dreamm from "../asserts/dreamm.png"
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
      <div className='logo'>
        <img src={dreamm} alt='logo' />
        <div className="" id="navbarNav">
          <div className="navbar-nav ml-auto">
            <NavLink className="nav-link btn" to="/">Home</NavLink>
            <NavLink className="nav-link btn" to="/about">About</NavLink>
            <NavLink className="nav-link btn" to="/contact">Contact</NavLink>
            <NavLink className="nav-link btn" to="/resource">Calculator</NavLink>
            <NavLink className="nav-link btn" to="/">Logout</NavLink>

            
           
           

          </div>
        </div>
        {showModal && <LogoutConfirmationModal handleLogout={handleLogout} handleClose={() => setShowModal(false)} />}
      </div>
    </nav>
  );
};

export default Navbar;
