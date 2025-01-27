import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { toast, ToastContainer } from "react-toastify";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB1qoplkrTabytshIjnwHQqC3gCMTpDM8",
  authDomain: "ecommerce-e9737.firebaseapp.com",
  projectId: "ecommerce-e9737",
  storageBucket: "ecommerce-e9737.firebasestorage.app",
  messagingSenderId: "189070838905",
  appId: "1:189070838905:web:2ae12bd650a6331e4398a8",
  measurementId: "G-7B4J69RL9Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user);
        navigate("/products")
      })
      .catch((error) => {
        let errorMessage = error.message;

        // Handle specific Firebase errors
        if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
          errorMessage = 'Invalid email or password. Please try again.';
        } else if (error.code === 'auth/too-many-requests') {
          errorMessage = 'Too many failed attempts. Please try again later.';
        }

        console.error("Login error:", errorMessage);
        toast.error(errorMessage);
        setError(errorMessage);
      });
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <>
    <div className = "main-container">
      <div className="wrapper">
        <div className="title-text">
          <div className="title login">Login Form</div>
        </div>

        <div className="form-container">
          <div className="form-inner">
            <form className="login" onSubmit={handleLoginSubmit}>
              <div className="field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={loginData.email}
                  onChange={handleLoginChange}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
              </div>
              {error && <p className="error">{error}</p>}
              {/* <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div> */}
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member? <label onClick={handleSignup}>Signup now</label>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
      </div>
    </>
  );
};
