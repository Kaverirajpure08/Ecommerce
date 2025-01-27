import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Carousel, Button, Card } from 'react-bootstrap'; 
import './ProductDetails.css';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <div className="container">
        <Card className="product-card">
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Carousel style ={{  border:"2px solid purple" }}>
              {product.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={image} alt={`${product.title} ${index + 1}`} />
                </Carousel.Item>
              ))}
            </Carousel>

            <Card.Text className="product-description">{product.description}</Card.Text>
            <Card.Text className="price">${product.price}</Card.Text>
            <Card.Text className="rating">
              Category: {product.category?.name || 'N/A'}
            </Card.Text>
            {/* <Button style ={{   background: "-webkit-linear-gradient(left, #a445b2, #fa4299)" , border:"1px solid purple"}} onClick={() => addToCart(product)}>
              Add to Cart
            </Button> */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetails;
