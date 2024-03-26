import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
// import Home from './Home';

const SignIn = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Signing in...');
    // Check if email and password are not empty (basic validation)
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter your email and password.');
    } else {
      // Perform actual sign-in logic here (not implemented in this example)
      
      setIsLoggedIn(true);
      navigate("/");
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="signin-form-group">
          <label className="signin-label" htmlFor="email">Email:</label>
          <input
            type="email"
            className="signin-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="signin-form-group">
          <label className="signin-label" htmlFor="password">Password:</label>
          <input
            type="password"
            className="signin-input"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signin-submit">Sign In</button> {/* Changed "Link" to "button" */}
      </form>
      <div className="signin-message">
        <p>Don't have an account? <Link className="signin-link" to="/signup">Create Account</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
