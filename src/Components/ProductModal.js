import React from 'react';
import './ProductModal.css'; // Add CSS for the modal

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <div className="modal-header">
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <p className="rating">Rating: {product.category?.name || 'N/A'}</p>
        </div>
        <div className="modal-body">
          <div className="carousel">
            {product.images.map((image, index) => (
              <img key={index} src={image} alt={`${product.title} ${index + 1}`} />
            ))}
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
