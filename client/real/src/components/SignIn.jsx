import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from './Firebase.config'
import './SignIn.css';
import { useLocation } from 'react-router-dom';
import googleimg from "../asserts/google.png"

const SignIn = ({ setIsLoggedIn }) => {
  const { login } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Signing in...');
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter your email and password.');
    } else {
      setIsLoggedIn(true);
      navigate('/');
    }
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  const handleSendOTP = () => {
    if (phoneNumber.trim() === '') {
      alert('Please enter your phone number.');
    } else {
      // Here, you would send the OTP to the provided phone number
      console.log('Sending OTP to:', phoneNumber);
      // For simplicity, let's assume the OTP is sent successfully
      alert('OTP sent successfully. Check your phone.');
    }
  };

  const handleVerifyOTP = () => {
    if (otp.trim() === '') {
      alert('Please enter the OTP.');
    } else {
      // Here, you would verify the entered OTP with the one sent
      console.log('Verifying OTP:', otp);
      // For simplicity, let's assume the OTP is correct
      setIsLoggedIn(true);
      navigate('/');
    }
  };

  const google = async (e) => {
    const provider = new GoogleAuthProvider();
    function setCookie(name, value, daysToExpire) {
      let date = new Date();
      date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
      document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      setCookie('logedin',true,365)
      setCookie("username",result.user.displayName,365);
      setCookie('token', result.user.accessToken,365);
      navigate('/'); 
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error.message);
    }
  }

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
        {isForgotPassword ? (
          <div className="forgot-password">
            <label className="signin-label" htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              className="signin-input"
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={handleSendOTP}
              disabled={!phoneNumber.trim()} // Disable the button if phone number is empty
            >
              Send OTP
            </button>
            <label className="signin-label" htmlFor="otp">OTP:</label>
            <input
              type="text"
              className="signin-input"
              id="otp"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              required
            />
            <button type="button" onClick={handleVerifyOTP}>Verify OTP</button>
          </div>
        ) : (
          <>
            <button type="submit" className="signin-submit">Sign In</button>
          
            <p className="forgot-password-link" onClick={handleForgotPassword}>Forgot Password?</p>
          <div>
          <img className='g_icon' src={googleimg} onClick={google} alt="google icon" />
          </div>
          </>
        )}
      </form>
      <div className="signin-message">
        <p>Don't have an account? <Link className="signin-link" to="/signup">Create Account</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
