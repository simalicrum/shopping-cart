import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div id="nav">
      <div id="store-name">Cat Store</div>
      <NavLink id="nav-home" to="/">
        Home
      </NavLink>
      <NavLink id="nav-shop" to="/shop">
        Shop
      </NavLink>
      <NavLink id="nav-checkout" to="/checkout">
        Checkout
      </NavLink>
      <div id="nav-total">Total: $0.00 (0)</div>
    </div>
  );
};

export default Nav;
