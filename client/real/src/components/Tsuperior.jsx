import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Tsuperior.css';

function Tsuperior() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="popup">
        <div className="popup-content">
          <h2>Exclusive Bali themed Villas with a stunning design outlook.</h2>
          <p>A community with the best of Architecture & Finesse</p>
          <p>Every Individual Villa with exclusive 6.5’ wide landscape space</p>
          <p>35+ Amenities & Features</p>
          <p>A safe & secure community with Multi-tier Security system.</p>
          <p>100 % Vaastu compliant homes</p>
          <p>Superior specifications</p>
          <p>Efficiency in space planning</p>
          <Link to='/Bestseller2'>
            <button type='button'>BACK</button>
          </Link>
        </div>
      </div>
    )
  );
}

export default Tsuperior;
