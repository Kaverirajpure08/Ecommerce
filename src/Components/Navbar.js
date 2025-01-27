import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav
      style={{
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        <Link
          to="/"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          ShopSphere
        </Link>
      </div>

      
      <div style={{ display: "flex", gap: "20px" }}>
       
        <Link
          to="/products"
          style={{
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Products
        </Link>
        <Link
          to="/cart"
          style={{
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Cart 
        </Link>
        <Link
          to="/checkout"
          style={{
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Checkout
        </Link>

        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
