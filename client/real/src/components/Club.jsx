import React, { useState } from 'react';
import "./Club.css"

function Club() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your registration logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: ''
    });
  };

  return (
    <div className="club-registration">
      <h2>Join DreamHouse Club</h2>
      <p>Sign up for our exclusive DreamHouse Club to receive updates, special offers, and insights about the real estate market!</p>
      <div className="registration-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <button onClick={handleSubmit}>Join Now</button>
      </div>
    </div>
  );
}

export default Club;
