import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import flagship from "../asserts/flagship.webp"; // Import the flagship1 image
import { Link } from 'react-router-dom';
import GoogleMap from './GoogleMap';
import "./Flagship.css";

function Flagship() {
  return (
    <div>
      <div className="linore-container">
        {/* Villa Image */}
        <img src={flagship} alt="flagship" className="villa-image" /> {/* Use the flagship1 image */}

        {/* Salient Features Section */}
        <div className="salient-features">
          <h2>Features</h2> 
          <h3>Casagrand flagship</h3>
          <div className="features">
            <ul>
              <li>Starting from 55 lakhs</li>
              <li>Spacious 2, 3 BHK apartments</li>
              <li>Located in Pallikarnai, Chennai</li>
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
        <h1>FLAGSHIP HIGHLIGHTS</h1>
        <h2>SALIENT FEATURES</h2>
        <div className='p'>
          <ul>
            <li>Elegantly crafted 887 Apartments and 54 Villas on 17.58 acres</li>
            <li>Thoughtfully designed 2,3 & 4 BHK Tudor Styled apartments with S+5 structure</li>
            <li>Beautifully designed 3 & 4 BHK Villas with G+2 & G+1 Structure</li>
            <li>The community has 42% open space with 69,000 sqft of colossal podiums</li>
            <li>Offers 110+ world-class amenities for a superior lifestyle</li>
            <li>An elaborate clubhouse of 34,000 sq.ft with luxurious amenities like Spa, Sauna, Jacuzzi & Salon</li>
            <li>100% Vaastu compliant homes with zero dead space</li>
            <li>Surrounded by prominent IT & ITEES Companies, schools, colleges & hospitals</li>
          </ul>
          <div className='more'>
            <div className='superior'>
              <Link to="/Superior1">
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
            <h2>ENTERTAINMENT AND FEATURES</h2>
            <ul>
              <li>Entrance plaza with drop-off zone</li>
              <li>Entry water feature</li>
              <li>Feature median planting</li>
              <li>Leisure landscape court</li>
              <li>Yoga & meditation zone</li>
              <li>Water refill station for community & pets</li>
              <li>Feature stepped seating</li>
              <li>Geometric seating</li>
              <li>Reflexology walkway with seating area</li>
              <li>Outdoor workstations with Wi-Fi</li>
              <li>Reading nook</li>
              <li>Seating nooks along pathways</li>
              <li>Multi-purpose lawn for social gatherings & events</li>
              {/* Add more amenities as needed */}
            </ul>
          </div>
        </div>
      </div>

      {/* Walkthrough Section */}
      <div className='walkthrough'>
        <h1>WALKTHROUGH</h1>
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3WJT-m4_XyA" title="Walkthrough 1" frameborder="0" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/m3Y8aVwZtU4" title="Walkthrough 2" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      {/* Configuration Section */}
      <h1>CONFIGURATION</h1>
      <div className='configuration'>
        <div className='configuration-box'>
          <p>Market Price : ₹13500 / Sqft</p>
        </div>
        <div className='configuration-box'>
          <p>Casagrand Price : ₹5299 / Sqft</p>
        </div>
        <div className='configuration-box'>
          <p>Offer Price : ₹4999 / Sqft</p>
        </div>
      </div>

      {/* Apartment Configurations Section */}
      <div class="apartment-table-container">
        <h2>Phase 1</h2>
        <table class="apartment-table">
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
              <td>Affordable</td>
              <td>959 Sqft</td>
              <td>Rs 4999 / Sqft</td>
              <td>Rs 47.94 Lakhs onwards</td>
            </tr>
            <tr>
              <td>2 BHK</td>
              <td>Superior</td>
              <td>1113 Sqft - 1262 Sqft</td>
              <td>Rs 4999 / Sqft</td>
              <td>Rs 55.63 Lakhs onwards</td>
            </tr>
            <tr>
              <td>3 BHK</td>
              <td>Superior</td>
              <td>1574 Sqft - 1684 Sqft</td>
              <td>Rs 4999 / Sqft</td>
              <td>Rs 78.68 Lakhs onwards</td>
            </tr>
            <tr>
              <td>3 BHK</td>
              <td>Pinnacle</td>
              <td>1914 Sqft - 1989 Sqft</td>
              <td>Rs 5399 / Sqft</td>
              <td>Rs 1.03 Cr onwards</td>
            </tr>
            <tr>
              <td>4 BHK</td>
              <td>Pinnacle</td>
              <td>2349 Sqft - 2354 Sqft</td>
              <td>Rs 5399 / Sqft</td>
              <td>Rs 1.26 Cr onwards</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="apartment-table-container">
        <h2>Phase 2</h2>
        <table class="apartment-table">
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
              <td>Superior</td>
              <td>1289 Sqft</td>
              <td>Rs 5399 / Sqft</td>
              <td>Rs 69.59 Lakhs Onwards</td>
            </tr>
            <tr>
              <td>3 BHK</td>
              <td>Superior</td>
              <td>1574 Sqft - 1689 Sqft</td>
              <td>Rs 5399 / Sqft</td>
              <td>Rs 84.98 Lakhs Onwards</td>
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

      <div className='whatsapp-container'>
        <div className='whatsapp'>
          {/* WhatsApp */}
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

export default Flagship;
