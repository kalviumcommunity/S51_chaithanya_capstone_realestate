import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import Home from './Home';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Signing in...');
    // Add code to handle signing in logic
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="signin-form-group">
          <label className="signin-label" htmlFor="email">Username:</label>
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
        <Link to="/Home" className="signin-submit" onClick={handleSignIn}>Sign In</Link> {/* Changed "Home" to "home" */}
      </form>
      <div className="signin-message">
        <p>Don't have an account? <Link className="signin-link" to="/signup">Create Account</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
