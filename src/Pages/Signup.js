import React, { useState } from "react";
import "./style.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom"; // Updated import for useNavigate
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom"; // Import Link for navigation

const firebaseConfig = {
  apiKey: "AIzaSyBB1qoplkrTabytshIjnwHQqC3gCMTpDM8",
  authDomain: "ecommerce-e9737.firebaseapp.com",
  projectId: "ecommerce-e9737",
  storageBucket: "ecommerce-e9737.firebasestorage.app",
  messagingSenderId: "189070838905",
  appId: "1:189070838905:web:2ae12bd650a6331e4398a8",
  measurementId: "G-7B4J69RL9Y",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const Signup = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match");
      toast.error("Passwords do not match!");
      return;
    }

    // Clear any previous error before attempting signup
    setError("");

    createUserWithEmailAndPassword(auth, signupData.email, signupData.password)
      .then((userCredential) => {
        console.log("User signed up:", userCredential.user);
        toast.success("Signup successful!");
        // Navigate to login page after successful signup
        navigate("/"); // Updated navigation using navigate
      })
      .catch((error) => {
        console.error("Signup error:", error.message);
        setError(error.message);
        toast.error(error.message);
      });
  };

  return (
    <>
    <div className="main-container">
      <div className="wrapper">
        <div className="title-text">
          <div className="title signup">Signup Form</div>
        </div>

        <div className="form-container">
          <div className="form-inner">
            <form className="signup" onSubmit={handleSignupSubmit}>
              <div className="field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={signupData.email}
                  onChange={handleSignupChange}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={signupData.password}
                  onChange={handleSignupChange}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  required
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                />
              </div>
              {error && <div className="error">{error}</div>} {/* Error message display */}
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
              {/* Link to the login page */}
              <div className="login-link">
                <Link to="/">Already have an account? Login</Link>
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
