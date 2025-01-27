
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [showModal, setShowModal] = useState(false); 
  const [orderConfirmed, setOrderConfirmed] = useState(false); 
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalPrice = cart.reduce(
    (sum, product) => sum + product.price * (product.quantity || 1),
    0
  );

  const handlePlaceOrder = () => {
    setShowModal(true); 
  };

  const handleConfirmOrder = () => {
    localStorage.setItem("cart", JSON.stringify([])); 
    setOrderConfirmed(true);
    setShowModal(false); 
    toast.success("Thank you for your order!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div style={{ background: "-webkit-linear-gradient(left, #a445b2, #fa4299)", height: "100vh" }}>
      <div style={{ padding: "20px", background: "-webkit-linear-gradient(left, #a445b2, #fa4299)" }}>
        <h2>Checkout</h2>
        <p>Total items: {cart.length}</p>
        <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
          {cart.map((product, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                background: "white",
              }}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                style={{ width: "60px", height: "60px", marginRight: "10px" }}
              />
              <div>
                <h4 style={{ margin: 0 }}>{product.title}</h4>
                <p style={{ margin: 0 }}>Price: ${product.price}</p>
                <p style={{ margin: 0 }}>Quantity: {product.quantity || 1}</p>
              </div>
            </div>
          ))}
        </div>
        <h3>Total Price of All Items: ${totalPrice.toFixed(2)}</h3>
        <button
          onClick={handlePlaceOrder}
          style={{
            padding: "10px 20px",
            backgroundColor: "#c3afb8",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Place Order
        </button>
      </div>


      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              {orderConfirmed ? (
                // Thank You Message in Modal
                <div className="modal-body text-center">
                  <h5 className="modal-title">Thank You for Your Order!</h5>
                  <p>Your total price is: ${totalPrice.toFixed(2)}</p>
                </div>
              ) : (
                <>
                  <div className="modal-header">
                    <h5 className="modal-title">Order Confirmation</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShowModal(false)}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>Are you sure you want to place this order?</p>
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleConfirmOrder}
                    >
                      Confirm
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

     
      <ToastContainer />
    </div>
  );
};

export default Checkout;
