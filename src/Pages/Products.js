import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import Cart from '../Components/Cart';

const Products = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
    console.log('Product added:', product);
    setCart((prevCart) => {
      const newCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });

    navigate("/cart");
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <div style={{background: "-webkit-linear-gradient(left, #a445b2, #fa4299)"}}>
      <ProductList addToCart={addToCart} /> 
      {/* <Cart cart={cart} /> */}
    </div>
  );
};

export default Products;
