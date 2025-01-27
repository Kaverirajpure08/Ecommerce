// import React, { useState } from "react";
// import NavbarComponent from "./NavbarComponent";
// import Sidebar from "./Sidebar";
// import { Container, Row, Col } from "react-bootstrap";
// import "./style1.css";

// const Layout = ({ children }) => {
//   const [showSidebar, setShowSidebar] = useState(false);

//   const toggleSidebar = () => setShowSidebar(!showSidebar);

//   return (
//     <div>
//       <NavbarComponent />
//       <div className="d-flex">
//         <div className={`sidebar-container ${showSidebar ? "show" : ""}`}>
//           <Sidebar />
//         </div>
//         <div className="content-container">
//           <Container fluid>
//             <Row>
//               <Col sm={12} md={9}>
//                 {children}
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;


// src/Pages/Layout.js
// import React from "react";
// import Navbar from "../Components/Navbar"; // Adjust path as necessary

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Navbar />
//       <div>{children}</div>
//     </div>
//   );
// };

// export default Layout;


import React from "react";
import Navbar from "../Components/Navbar"; // Adjust path as necessary
import { Outlet } from "react-router-dom"; // Import Outlet for nested routes

const Layout = () => {
  return (
    <div>
      <Navbar />
      {/* Outlet will render the nested routes */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
