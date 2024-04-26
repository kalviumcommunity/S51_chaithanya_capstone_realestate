import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';

import home1 from '../asserts/linore.webp';
import { Link } from 'react-router-dom';
import GoogleMap from './GoogleMap';
import "./Linore.css";

function Linore() {
  return (
    <div>
      <div className="linore-container">
        {/* Villa Image */}
        <img src={home1} alt="DreamHouse Linore" className="villa-image" />

        {/* Salient Features Section */}
        <div className="salient-features">
          <h2>Features</h2>
          <h3>DreamHouse Linore</h3>
          <div className="features">
            <ul>
              <li>Starting from 71 lakhs </li>
              <li>Spacious 2, 3, and 4 BHK villas</li>
              <li>Located in kattupakkam.chennai</li>
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

      {/* Highlights Section */}
      <div className='highlights'>
        <h1>DREAMHOUSE LINORE HIGHLIGHTS</h1>
        <h2>SALIENT FEATURES</h2>
        <div className='p'>
          <ul>
            <li>275 signature 2, 3 & 4 BHK residences built on a B+G+5 Floor with Contemporary elevation across 4.87-acres</li>
            <li>Superior specs like gleaming Italian marble flooring, Digital Lock, High-end Sanitary Fittings and more</li>
            <li>Bedrooms with 3x ventilation with Huge windows</li>
            <li>Beautiful views of a 1.5-acre podium and lush green belt of 56,000 sft. to give an opportunity to be with nature</li>
            <li>70+ Amenities including 11,000 sft. Clubhouse with Double-height Lobby, 9400 sft. Swimming pool and more</li>
          </ul>
          <div className='more'>
            <Link to="/Linoremore">
              <button className="arrow-button">MORE REASON &#8594;</button>
            </Link>
            <div className='superior'>
              <Link to="/Superior">
                <button>SUPERIOR HOMES</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="amenities">
        <h1>Amenities</h1>
        <div className="amenities-list-container">
          <div className="amenities-list">
            <h2>Outdoor Amenities</h2>
            <ul>
              <li>Mini golf</li>
              <li>Tree house</li>
              <li>Hammock zone</li>
              {/* Add more amenities as needed */}
            </ul>
          </div>
          <div className='aminities-list1'>
            <h2>Indoor Amenities</h2>
            <ul>
              <li>Swimming pool</li>
              <li>Kids pool</li>
              <li>In pool day bed</li>
              {/* Add more amenities as needed */}
            </ul>
          </div>
        </div>
      </div>

      {/* Walkthrough Section */}
      <div className='walkthrough'>
        <h1>WALKTHROUGH</h1>
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Iujq_H4RBX4" title="Walkthrough 1" frameBorder="0" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bsAsYwFfmio" title="Walkthrough 2" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>

      {/* Configuration Section */}
      <h1>CONFIGURATION</h1>
      <div className='configuration'>
        <div className='configuration-box'>
          <p>Market Price : ₹6500 / Sqft</p>
        </div>
        <div className='configuration-box'>
          <p>Casagrand Price : ₹5849 / Sqft</p>
        </div>
        <div className='configuration-box'>
          <p>Offer Price : ₹5749 / Sqft</p>
        </div>
      </div>

      {/* Apartment Configurations Section */}
      <div className='apartment'>
        <h1>Apartment Configurations</h1>
        <table className="apartment-table">
          <thead>
            <tr>
              <th>BHK</th>
              <th>UNIT TYPE</th>
              <th>BUILT-UP AREA</th>
              <th>PRICE PER SQ. FT.</th>
              <th>PRICE RANGE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2 BHK</td>
              <td>Apartment</td>
              <td>1169 - 1316 Sqft</td>
              <td>5749/Sqft</td>
              <td>Rs. 67.20 Lakhs Onwards</td>
            </tr>
            <tr>
              <td>3 BHK</td>
              <td>Apartment</td>
              <td>1593 - 1780 Sqft</td>
              <td>5749/Sqft</td>
              <td>Rs. 91.58 Lakhs Onwards</td>
            </tr>
            <tr>
              <td>4 BHK</td>
              <td>Apartment</td>
              <td>2506 - 2512 Sqft</td>
              <td>5849/Sqft</td>
              <td>Rs. 1.46 Cr Onwards</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Copyright Section */}
      <div className='copy'>
        <p>&copy; *Price mention is basic cost. Other charges excluded</p>
      </div>

      {/* Community Map Section */}
      <h1>KNOW YOUR COMMUNITY</h1>
      <div className='community'>
      </div>
      <div className='whatsapp-container'>
  <div className='whatsapp'>
    {/* WhatsApp Widget */}
    <WhatsAppWidget
      className="whatsapp-button"
      phoneNumber="7010965635"
      message="I'm interested in DreamHouse Linore. Can you provide me with more information?"
    />
    
    {/* Help message */}
    <p className="help-message">Need help? Chat with us on WhatsApp!</p>
  </div>
</div>
    </div>
  );
}

export default Linore;
