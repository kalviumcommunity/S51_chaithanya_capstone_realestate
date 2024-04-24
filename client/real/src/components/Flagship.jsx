import React from 'react';
import home2 from '../asserts/home2.avif'; 
import "./Flagship.css"; 

function Flagship() {
  return (
    <div className="flagship-container">

      {/* Villa Image */}
      <img src={home2} alt="Best Seller in Pallikarnai" className="villa-image" />
      {/* Salient Features Section */}
      <div className="flagship-features">
        <h2>Features</h2>
        <h3>Flagship</h3>
        <div className="features">
          <ul>
            <li>Starting from 55 lakhs</li>
            <li>Spacious 2 and 4 BHK villas</li>
            <li>Prime location in Pallikarnai, Chennai</li>
            <li>Under construction</li>
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

export default Flagship;
