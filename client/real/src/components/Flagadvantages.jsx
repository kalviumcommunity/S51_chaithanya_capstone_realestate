import React from 'react';

function Flagadvantages() {
  return (
    <div className="advantages-container">
      <h1>Location Advantages</h1>

      {/* Distance From Nearest Hospital */}
      <div className="advantage-section">
        <h2>Distance From Nearest Hospital</h2>
        <ul>
          <li>Kamakshi Memorial Hospital – 15min</li>
          <li>Apollo Hospital – 22mins</li>
          <li>Global Hospital – 18mins</li>
          <li>V Cure Hospital – 7mins</li>
        </ul>
      </div>

      {/* Distance from Nearest Educational Institutions */}
      <div className="advantage-section">
        <h2>Distance from Nearest Educational Institutions (Schools & Colleges)</h2>
        <ul>
          <li>Sree Balaji Dental College – 15mins</li>
          <li>Jerusalem Engineering College – 12mins</li>
          <li>ASAN Memorial College of Arts and Science – 6mins</li>
          <li>National Institute of Ocean Technology – 15mins</li>
          <li>Infant Jesus Higher Secondary School – 6mins</li>
          <li>St.John’s Public School – 10mins</li>
          <li>Orchids The International School – 25mins</li>
          <li>The Indian Public School – 24mins</li>
        </ul>
      </div>

      {/* IT Parks */}
      <div className="advantage-section">
        <h2>IT Parks</h2>
        <p>Elcot IT park</p>
      </div>

      {/* Location Highlights */}
      <div className="advantage-section">
        <h2>Location Highlights</h2>
        <ul>
          <li>There is bus connectivity to all parts of Chennai</li>
          <li>It is right next to Velachery Tambaram Main Road (fastest route)</li>
          <li>Proximity to few well-known colleges, Companies.</li>
          <li>Reputed Retail chains like Reliance Trends, Jeyachandran and Chennai Silks are close by.</li>
        </ul>
      </div>
    </div>
  );
}

export default Flagadvantages;
