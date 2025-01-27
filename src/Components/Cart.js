import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();

  // Initialize the cart with default quantity = 1 if not already set
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return storedCart.map((product) => ({
      ...product,
      quantity: product.quantity || 1, // Set default quantity to 1 if not defined
    }));
  });

  // Increase product quantity
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Decrease product quantity or remove item if quantity reaches 0
  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity -= 1;

    if (updatedCart[index].quantity === 0) {
      // Remove item if quantity is 0
      updatedCart.splice(index, 1);
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove product from cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Proceed to checkout
  const handleCheckout = () => {
    navigate("/checkout");
  };

  // Display message if cart is empty
  if (cart.length === 0) {
    return (
      <div
        style={{
          background: "-webkit-linear-gradient(left, #a445b2, #fa4299)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#fff" }}>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div style={{ background: "-webkit-linear-gradient(left, #a445b2, #fa4299)", height: "100vh" }}>
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
            <img
              src={product.images[0]}
              alt={product.title}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3 className="product-title" style={{ justifyContent: "left" }}>
                {product.title}
              </h3>
              <p>Price per unit: ${product.price}</p>
              <p>Total Price: ${product.price * product.quantity}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(index)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => increaseQuantity(index)}>+</button>
              </div>
              <button onClick={() => removeFromCart(index)} className="remove-btn">
                Remove
              </button>
            </div>
          </div>
        ))}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '188px',
            }}
          >
            <button onClick={handleCheckout} className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
