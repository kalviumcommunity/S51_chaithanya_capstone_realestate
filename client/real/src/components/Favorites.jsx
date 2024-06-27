import React from 'react';
import './Favorites.css';
import { useAppContext } from './AppContext';

const Favorites = () => {
  const { favorites } = useAppContext();

  return (
    <div className="favorites-container">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((property, index) => (
            <div key={index} className="favorite-item">
              <h2>{property.name}</h2>
              <p>Location: {property.location}</p>
              <p>Type: {property.type}</p>
              <p>Price: {property.price}</p>
              <p>Status: {property.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
