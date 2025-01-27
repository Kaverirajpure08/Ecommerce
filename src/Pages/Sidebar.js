import React, { useState } from "react";
import { Collapse, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        <Nav.Link onClick={() => setOpen(!open)}>
          Services
        </Nav.Link>
        <Collapse in={open}>
          <div>
            <Nav.Link as={Link} to="/service1">Service 1</Nav.Link>
            <Nav.Link as={Link} to="/service2">Service 2</Nav.Link>
          </div>
        </Collapse>
      </Nav>
    </div>
  );
};

export default Sidebar;
