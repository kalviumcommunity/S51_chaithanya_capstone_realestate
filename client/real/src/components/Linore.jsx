import React from 'react';
import home1 from '../asserts/home1.jpg'; 
import "./Linore.css";

function Linore() {
  return (
    <div className="linore-container">

      {/* Villa Image */}
      <img src={home1} alt="DreamHouse Linore" className="villa-image" />
      {/* Salient Features Section */}
      <div className="salient-features">
        <h2>Features</h2>
        <h3>DreamHouse Linore</h3>
    <div className="features">
        <ul>
           <li>starting from 71lakhs </li>
          <li>Spacious 2, 3, and 4 BHK villas</li>
          <li>Prime location in Alwarpet, Chennai</li>
          <li>Modern amenities including swimming pool, gym, and clubhouse</li>
          <li>Lush green surroundings</li>
          <li>24/7 security</li>
        </ul>
        </div>
      </div>

      {/* Enquire Now Section */}
      <div className="enquire-now">
        <h2>Enquire Now</h2>
        <form>
          <div className="input-group">
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number:</label><br />
            <input type="text" id="phone" name="phone" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    
    </div>
  );
}

export default Linore;
