import React from 'react';
import "./Favorites.css"

const Favorites = () => {
  // Dummy data for illustration
  const favoriteProperties = [
    {
      id: 1,
      name: 'Luxury Villa',
      location: 'Alwarpet',
      price: 'RS 1CR',
      bedrooms: 4,
      bathrooms: 3,
      description: 'Beautiful luxury villa located in the heart of the city.',
    },
    {
      id: 2,
      name: 'Bunglaw',
      location: 'Poys Garden',
      price: 'RS  0.8CR',
      bedrooms:5,
      bathrooms: 2,
      description: 'Sleek and modern villa in poys garden.',
    },
    // Add more properties as needed
  ];

  return (
    <div className="favorites-container">
      <h1 className="favorites-heading">Your Favorite Properties</h1>
      <div className="properties-grid">
        {favoriteProperties.map(property => (
          <div key={property.id} className="property-card">
            <div className="property-details">
              <h2 className="property-name">{property.name}</h2>
              <p className="property-location">{property.location}</p>
              <p className="property-price">{property.price}</p>
              <p className="property-description">{property.description}</p> {/* Sample description line */}
              <div className="property-features">
                <p>{property.bedrooms} Bedrooms</p>
                <p>{property.bathrooms} Bathrooms</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
