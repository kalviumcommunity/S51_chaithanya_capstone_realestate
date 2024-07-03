import React from 'react';
import './Cart.css';
import { useAppContext } from './AppContext';

const Cart = () => {
  const { cart } = useAppContext();

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>No items in the cart yet.</p>
      ) : (
        <div className="cart-list">
          {cart.map((property, index) => (
            <div key={index} className="cart-item">
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

export default Cart;
