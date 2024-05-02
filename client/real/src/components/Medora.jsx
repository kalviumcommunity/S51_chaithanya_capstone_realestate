import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import flagship from "../asserts/flagship.webp"; // Import the flagship1 image
import { Link } from 'react-router-dom';
import m from "../asserts/m.webp"


function Medora() {
  return (
    <div>
      <div className="linore-container">
        {/* Villa Image */}
        <img src={m} alt="flagship" className="villa-image" /> {/* Use the flagship1 image */}

        {/* Salient Features Section */}
        <div className="salient-features">
          <h2>Features</h2> 
          <h3>Casagrand Medora</h3>
          <div className="features">
            <ul>
              <li>Rs. 1.16 Cr Onwards</li>
              <li>2, 3 BHK apartments</li>
              <li>Located in Korattur, Chennai.</li>
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
      <div classname="construction-range">
      <label for="construction">Construction Range:</label>
      <input type="range" id="construction" name="construction" min="0" max="100" value="3"></input>
      <span id="construction-value">3%</span>
    </div>

      {/* Highlights Section */}
      <div className='highlights'>
        <h1>MEDORA HIGHLIGHTS</h1>
        <h2>SALIENT FEATURES</h2>
        <div className='p'>
          <ul>
            <li>Luxurious 2 & 3 BHK apartments with expansive amenities offerunparalleled lifestyle</li>
            <li>It has 155 superior units adorned with the highest qualityfurnishing and accessories</li>
            <li>All homes are spatially planned ensuring every space of aunit is of premium luxury</li>
            <li>Ample open spaces filled with lush landscape features</li>
            <li>It offers 40+ world class amenities enhancing the social
environment and liveliness of the community</li>
            <li>It has premium specification which gives an aesthetic appeal
of the interiors</li>
          </ul>
          <div className='more'>
            <div className='superior.'>
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
            <h2>FEATURES</h2>
            <ul>
              <li>KIDS Tot Lot</li>
              <li>Jungle Gym</li>
              <li> Tyre swings</li>
              <li> Outdoor Board Games Zone</li>
              <li>Wonder park</li>
              <li>Rope Climbers</li>
              <li>Rock Climbing Wall</li>
              <li>Poolside deck with Lounge Seaters</li>
              <li>Urn Waterspouts</li>
              {/* Add more amenities as needed */}
            </ul>
          </div>
        </div>
      </div>

      {/* Walkthrough Section */}
      <div className='walkthrough'>
        <h1>WALKTHROUGH</h1>
        <div className="video-container">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/GPO2FH625l8?si=JQ7RZZMJuPC_281Z"
    title="Walkthrough 1"
    frameBorder="0"
    allowFullScreen
  ></iframe>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/PH0n2kWxzAk?si=T8VFV0svzFmDQQGK"
    title="Walkthrough 2"
    frameBorder="0"
    allowFullScreen
  ></iframe>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/HebZj5AZCuw?si=3PPw29BLjzlswVyu"
    title="Walkthrough 3"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>

      </div>

      {/* Configuration Section */}
      <h1>CONFIGURATION</h1>
      <div className='configuration'>
        <div className='configuration-box'>
          <p>Market Price : ₹ 15000/Sqft</p>
        </div>
        <div className='configuration-box'>
          <p>Casagrand Price : ₹7250/Sqft</p>
        </div>
        <div className='configuration-box'>
          <p>Offer Price : ₹6950/Sqft</p>
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

export default Medora;
