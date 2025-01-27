// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => setCart([...cart, product]);
//   const removeFromCart = (productId) =>
//     setCart(cart.filter((product) => product.id !== productId));

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };



import React, { createContext, useContext, useState } from 'react';

// Create the Cart Context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component to provide the context to the app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
