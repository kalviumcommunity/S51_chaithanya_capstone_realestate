import React from 'react';
import { NavLink } from 'react-router-dom'; // Correct import for NavLink
import './Navbar.css';
import logo from '../asserts/logo.jpg';
import favorite from "../asserts/favourite.png"; // Import favorite icon
import cart from "../asserts/cart new.png"; // Import cart icon

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {

  const handleLogout = () => { 
    // Perform logout logic here
    setIsLoggedIn(false);
  };

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
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="nav-link btn btn-primary" onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link btn btn-primary" to="/signin" onClick={() => console.log('Sign In clicked')}>Sign In</NavLink>
              </li>
            )}
            <li className="nav-item">
              <div className="navbar-icons-container">
                <NavLink to="/favourite">
                  <img src={favorite} alt="Favorite" className="nav-link btn btn-link navbar-icon" />
                </NavLink>
                <NavLink to = "/Cart">
                <img src={cart} alt="Cart" className="nav-link btn btn-link navbar-icon" />
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
