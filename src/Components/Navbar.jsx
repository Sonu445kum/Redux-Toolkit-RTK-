import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

export default function Navbar() {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">MyStore</Link>
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="cart-link">
          <Link to="/cart">
            🛒 Cart
            <span className="cart-badge">{totalQuantity || 0}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
