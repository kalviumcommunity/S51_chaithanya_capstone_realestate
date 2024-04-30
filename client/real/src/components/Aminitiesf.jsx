import React from 'react';
import { Link } from 'react-router-dom';
import "./Aminitiesf.css"

function Aminitiesf({ handleClose }) {
  return (
    <div className="amenities-container">
      <div className="amenities-list">
        <h2>Amenities</h2>
        <ul>
          <li>Mini golf</li>
          <li>Tree house</li>
          <li>Hammock zone</li>
          <li>Jogging track / walking track</li>
          <li>Quiet nook</li>
          <li>Pets park</li>
          <li>Aroma garden</li>
          <li>Birds bath</li>
          <li>Bicycle rack & Bicycle track</li>
          <li>Water pavilion</li>
          <li>Party lawn</li>
          <li>Barbeque corner</li>
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
        <h2>POOLSIDE AMENITIES</h2>
        <ul>
          <li>Swimming pool</li>
          <li>Kids pool</li>
          <li>In pool day bed</li>
          <li>Recessed seating</li>
          <li>Jacuzzi</li>
          <li>Poolside lounge</li>
        </ul>
        <h2>INDOOR AMENITIES</h2>
        <ul>
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
          <li>Convenio store</li>
          <li>Interactive wall games</li>
          <li>VR games</li>
          <li>Video games</li>
          <li>Game arcade</li>
          <li>Driver/maid dormitory</li>
        </ul>
        <h2>ROOF TOP AMENITIES</h2>
        <ul>
          <li>Infinity walkway</li>
          <li>Rooftop party corner</li>
          <li>Terrace sit out</li>
        </ul>
      </div>
      
      <Link to="/flagship" className="flagship-link">Back to Flagship Page</Link>
    </div>
  );
}

export default Aminitiesf;
