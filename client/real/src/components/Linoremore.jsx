import React from 'react';
import { Link } from 'react-router-dom';

function Linoremore() {
  const onClose = () => {
    // Add logic to close the popup
    // For example, you can set a state variable to control the visibility of the popup
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Additional Reasons</h2>
        <p>A community with 70% Open Space and 3 Acres of openness for ample natural light and ventilation</p>
        <p>A vehicle free podium designed for kids and senior citizen</p>
        <p>100% Vaastu-compliant homes for positive living</p>
    <Link to="/Linore">
        <button onClick={onClose}>Close</button>
        </Link>
      </div>
    </div>
  );
}

export default Linoremore;
