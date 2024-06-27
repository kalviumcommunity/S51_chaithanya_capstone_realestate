import React, { createContext, useState, useContext } from 'react';

// Create a context
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const addToFavorites = (property) => {
    if (!favorites.some(fav => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };

  const addToCart = (property) => {
    if (!cart.some(item => item.id === property.id)) {
      setCart([...cart, property]);
    }
  };

  return (
    <AppContext.Provider value={{ favorites, cart, addToFavorites, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};


export default AppContext;
