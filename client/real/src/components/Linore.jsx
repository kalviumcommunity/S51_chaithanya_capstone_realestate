import React from 'react';
import home1 from '../asserts/linore.webp';
import {Link} from 'react-router-dom';
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
      <div className='highlights'>
  <h1>DREAMHOUSE LINORE HIGHLIGHTS</h1>
  <h2>SALIENT FEATURES</h2>
<div className='p'>
  <li>275 signature 2, 3 & 4 BHK residences built on a B+G+5 Floor with Contemporary elevation across 4.87-acres</li>
  <li> Superior specs like gleaming Italian marble flooring, Digital Lock, High-end Sanitary Fittings and more</li>
  <li> Bedrooms with 3x ventilation with Huge windows</li>
  <li> Beautiful views of a 1.5-acre podium and lush green belt of 56,000 sft. to give an opportunity to be with nature</li>
  <li> 70+ Amenities including 11,000 sft. Clubhouse with Double-height Lobby, 9400 sft. Swimming pool and more</li>
  <div className='more'>
        {/* Add arrow button for more reasons */}

        <Link to="/Linoremore">
        <button className="arrow-button">MORE REASON &#8594;</button>
        </Link>
      <div className='superior'>
        <Link to ="/Superior">
          <button>SUPERIOR HOMES</button>
        </Link>
      </div>
      </div>
  </div>
</div>

{/*     
      <div className="amenities">
        <h1>Amenities</h1>
        <div style={{display: "flex"}}>
          <ul className="amenities-list">
            <li>Mini golf</li>
            <li>Tree house</li>
            <li>Hammock zone</li>
            <li>Jogging track / Walking track</li>
            <li>Quiet nook</li>
            <li>Pets park</li>
            <li>Aroma garden</li>
            <li>Birds bath</li>
            <li>Bicycle rack & Bicycle track</li>
            <li>Water pavilion</li>
            <li>Party lawn</li>
            <li>Barbecue corner</li>
            <li>Senior citizen zone</li>
            <li>Outdoor board game</li>
            <li>Nanny’s pavilion</li>
            <li>Reflexology walkway</li>
            <li>Yoga deck</li>
            <li>Hobby pavilion</li>
            <li>Butterfly garden</li>
            <li>Seating bay</li>
            <li>Botanical garden</li>
            <li>Tot lot</li>
            <li>Kids jungle gym</li>
            <li>Rock climbing wall</li>
            <li>Sensory play area</li>
            <li>Musical garden</li>
            <li>Obstacle arena</li>
            <li>Chalkboard wall</li>
            <li>Science park</li>
            <li>Sand pit</li>
            <li>Traditional play</li>
            <li>Interactive wall</li>
            <li>DIY Garden</li>
            <li>Car charging point</li>
            <li>Car wash bay</li>
          </ul>
          <div className='aminities-list1'>
            <ul>
              <li>Swimming pool</li>
              <li>Kids pool</li>
              <li>In pool day bed</li>
              <li>Recessed seating</li>
              <li>Jacuzzi</li>
              <li>Poolside lounge</li>
              <li>Multipurpose hall</li>
              <li>Home theatre</li>
              <li>Indoor games</li>
              <li>Kids play area</li>
              <li>Kids Library</li>
              <li>Gym</li>
              <li>Interactive workout</li>
              <li>Crossfit corner</li>
              <li>Adventure wall games</li>
              <li>Mini play</li>
              <li>Ball pit</li>
              <li>Association room</li>
              <li>Café</li>
              <li>Creche</li>
              <li>Convenience store</li>
              <li>Interactive wall games</li>
              <li>VR games</li>
              <li>Video games</li>
              <li>Game arcade</li>
              <li>Driver/maid dormitory</li>
              <li>Infinity walkway</li>
              <li>Roof top party corner</li>
              <li>Terrace sit out</li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Linore;
