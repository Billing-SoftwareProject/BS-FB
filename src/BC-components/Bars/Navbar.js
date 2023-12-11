import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Bars/sideNav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-logo">{/* <h1>Logo</h1> */}</div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/signup">signup</a>
          <a href="/about">About</a>
          <a href="/Invoices">Invoices</a>
          {/* <a href="/Additems">Additems</a> */}
          <Link to="/items">Items</Link>
          <a href="/search">SearchItem</a>
          <a href="/Cart">Cart</a>
          <a href="/bill">CreateBill</a>
          <a href="/code">QR</a>
          <a href="/phone">Phone</a>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
