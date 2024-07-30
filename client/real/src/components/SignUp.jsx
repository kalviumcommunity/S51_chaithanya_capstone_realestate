import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from './Firebase.config'
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // State to track the current step
  const navigate = useNavigate();

  const handleNextStep = (e) => {
    e.preventDefault();
    // Validate the input fields for each step
    if (step === 1) {
      if (!email.trim()) {
        alert('Please enter your email.');
        return;
      }
    } else if (step === 2) {
      if (!password.trim() || !confirmPassword.trim()) {
        alert('Please enter your password and confirm password.');
        return;
      }
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
    }
    // Move to the next step
    setStep(step + 1);
  };

  const handleSignUp = async(e) => {
    e.preventDefault();
        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
    
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          // Additional logic here if needed, e.g., saving user data to Firestore
    
          // Redirect or navigate to home after successful signup
          navigate('/Home');
        } catch (error) {
          console.error('Error during signup:', error.message);
          alert(`Signup failed:${error.message}`);
        }
    
  };

  const handlePreviousStep = (e) => {
    e.preventDefault();
    // Move to the previous step
    setStep(step - 1);
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={step === 3 ? handleSignUp : handleNextStep}>
        {step === 1 && (
          <div className="signup-form-group">
            <label className="signup-label" htmlFor="email">Email</label>
            <input
              type="email"
              className="signup-input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        )}
        {step === 2 && (
          <div className="signup-form-group">
            <label className="signup-label" htmlFor="password">Password:</label>
            <input
              type="password"
              className="signup-input"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="signup-label" htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              className="signup-input"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        {step !== 3 && (
          <div className="signup-buttons">
            {step > 1 && <button type="button" onClick={handlePreviousStep}>Previous</button>}
            <button type="submit">Next</button>
          </div>
        )}
        {step === 3 && (
          <div className="signup-buttons">
            <button type="button" onClick={handlePreviousStep}>Previous</button>
            <button type="submit" className="signup-submit">Sign Up</button>
          </div>
        )}
      </form>
      <div className="signup-message">
        <p>Already have an account? <Link className="signup-link" to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
