

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Login } from '../src/Pages/Login';
// import { Signup } from '../src/Pages/Signup';
// import Layout from "../src/Pages/Layout";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Layout>
//          <Route path ="/home" element={<Hiome />} />
//         </Layout>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Login } from '../src/Pages/Login';
// import { Signup } from '../src/Pages/Signup';
// import Layout from "../src/Pages/Layout";
// import Home from "../src/Pages/Home"; // Import your Home component
// import Products from '../src/Pages/Products';
// import CartPage from '../src/Pages/CartPage';
// import CheckoutPage from '../src/Pages/CheckoutPage';
// import Navbar from '../src/Components/Navbar';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
        
//         {/* Wrap the routes inside the Layout component */}
//         {/* <Route element={<Layout />}>
//           <Route path="/home" element={<Home />} />
//         </Route> */}
//  <Navbar />
// <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={<CheckoutPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React,{useState} from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Login } from "../src/Pages/Login";
// import { Signup } from "../src/Pages/Signup";
// import Layout from "../src/Pages/Layout";
// import Home from "../src/Pages/Home";
// import Products from "../src/Pages/Products";
// import CartPage from "../src/Pages/CartPage";
// import CheckoutPage from "../src/Pages/CheckoutPage";
// import Navbar from "../src/Components/Navbar";
// import ProductDetails from "./Components/ProductDetails";
// import ProductList from "./Components/ProductList";
// import Cart from "./Components/Cart";

// function App() {

 

//   return (
//     <Router>
//       {/* Navbar is outside of Routes */}
      
//       <Routes>
//         Define your routes here
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Navbar />
//         <Route path="/home" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={<CheckoutPage />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
     
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../src/Pages/Login";
import { Signup } from "../src/Pages/Signup";
import Layout from "../src/Pages/Layout";
import Home from "../src/Pages/Home";
import Products from "../src/Pages/Products";
import CartPage from "../src/Pages/CartPage";
import CheckoutPage from "../src/Pages/CheckoutPage";
import ProductDetails from "./Components/ProductDetails";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

function App() {
  return (
    <Router>
      <Routes>
        {/* No Navbar for Login and Signup */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Layout with Navbar for other pages */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
