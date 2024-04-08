// Cart.js

import React from 'react';
import "./Cart.css";

const Cart = () => {
  // Dummy data for illustration
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 'Rs 1.3Cr',
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 'RS 89L',
      quantity: 1,
    },
    // Add more items as needed
  ];

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <h2 className="item-name">{item.name}</h2>
              <p className="item-price">{item.price}</p>
              <p className="item-quantity">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
