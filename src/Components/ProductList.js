import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from API
  useEffect(() => {
    axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleViewMore = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      style={{
        background: '-webkit-linear-gradient(left, #a445b2, #fa4299)',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      {products.length === 0 ? (
        <h2 style={{ textAlign: 'center', color: '#fff' }}>No Products Available</h2>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.images[0]}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">Price: ${product.price}</p>
              <div className="button-container">
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)} // Call addToCart when button is clicked
                >
                  Add to Cart
                </button>
                <button
                  className="view-more-btn"
                  onClick={() => handleViewMore(product.id)}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
