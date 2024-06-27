import React from 'react';
import { useAppContext } from './AppContext'; // Adjust the import path as necessary
import { Link } from 'react-router-dom';

const PropertyCard = () => {
  const { addToFavorites, addToCart } = useAppContext();

  const property = {
    id: 1,
    name: 'Casagrand Linore',
    location: 'Kattupakkam, Chennai',
    type: '2, 3 & 4 BHK Apts',
    price: 'Starting from 71 Lakhs*',
    status: 'Under construction',
  };

  const handleAddToFavorites = () => {
    addToFavorites(property);
  };

  const handleAddToCart = () => {
    addToCart(property);
  };

  return (
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="selectedImage">Casagrand Linore</label>
        <p className="details">
          Located in {property.location}<br />
          {property.type}<br />
          {property.price}<br />
          {property.status}
        </p>
      </div>
      <div className="form-group">
        { /* Potential Conflict: Additional form groups */}
      </div>
      <div className="button-group">
        <button className="fav-btn" onClick={handleAddToFavorites}>
          <i className="fas fa-heart"></i>
        </button>
        <button className="cart-btn" onClick={handleAddToCart}>
          <i className="fas fa-shopping-cart"></i>
        </button>
        <Link to="/Linore">
          <button type="button">View More</button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
