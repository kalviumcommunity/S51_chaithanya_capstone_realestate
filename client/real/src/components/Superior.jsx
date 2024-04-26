import React from 'react';
import { Link } from 'react-router-dom';
import "./Superior.css";

function Superior() {
  return (
    <div className="superior-container">
      <h2>Additional Reasons</h2>
      <p>Vaastu Compliant homes for enhancing a positive living</p>
      <p>Conscious design efforts ensure Vaastu compliance:</p>
      <ul>
        <li>Entry doors face North or East.</li>
        <li>Kitchens are located in Southeast or Northwest.</li>
        <li>Bedrooms are positioned in the Southwest.</li>
        <li>No toilets in the Northeast.</li>
        <li>No bed headboards in the North.</li>
      </ul>
      <p>Superior Specification:</p>
      <ul>
        <li>Grand Main door of veneer finish with designer architrave and side panel creates a welcoming effect to your home</li>
        <li>Italian marble flooring in Living area and dining.</li>
        <li>Digital lock for main door – New generation digital lock system with which you can unlock your door with a simple touch and can share the digital key to any visitors.</li>
        <li>Multi feature tap – Superior quality smart pullout tap is provided in kitchen for easy cleaning and use.</li>
        <li>Cloth drying – The balcony areas are facilitated with cloth drying hanger in the ceiling.</li>
        <li>Premium range of American Standard / Kohler & equivalent fittings in bathrooms and kitchens.</li>
        <li>Apartments with luxurious Master bathrooms fitted with Shower panel with rain shower and hand shower, Glass partition with door, 2 feet trench drain and granite flooring in shower area.</li>
        <li>A Community that makes you go WOW with the awe-looking design!</li>
        <li>Casagrand Linore offers the epitome of luxury with its contemporary facade, 5star interiors, and countless features and amenities designed flawlessly to give you a living experience that is absolutely par excellence.</li>
      </ul>
      <Link to="/Linore" className="close-link">
        <button>Close</button>
      </Link>
    </div>
  );
}

export default Superior;
