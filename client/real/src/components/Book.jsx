import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Book.css";

function Book() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [property, setProperty] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const appointment = { name, email, phone, date, time, property };

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointment),
      });

      if (response.ok) {
        alert('Appointment scheduled successfully');
        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        setTime('');
        setProperty('');
      } else {
        alert('Failed to schedule appointment');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to schedule appointment');
    }
  };

  return (
    <div className="schedule-appointment">
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <div>
          <label>Property ID:</label>
          <input type="text" value={property} onChange={(e) => setProperty(e.target.value)} required />
        </div>
        <button type="submit">Schedule</button>
      </form>
    </div>
  );
}

export default Book;
