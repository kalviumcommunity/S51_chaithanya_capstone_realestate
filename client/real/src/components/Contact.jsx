import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Feedback, setFeedback] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/feedback', {
        name: name,
        email: email,
        feedback: Feedback,
      })
      .then((response) => {
        console.log(response);
        setMessageSent(true);
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us for any inquiries or assistance.</p>
        <div className="contact-details">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>
              Dream House Realty <br />
              19, Ranga Street, <br />
              Dreamville, CA 12 <br />
              Chennai <br />
            </p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>Phone: 7010965635</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>Email: dreamhouserealty@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Feedback:</label>
            <textarea
              id="message"
              name="message"
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      {messageSent && (
        <div className="popup">
          <p>Message sent successfully!</p>
          <button onClick={() => setMessageSent(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Contact;
