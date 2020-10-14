import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {
  return (
    <div id="nav">
      <h2 id="store-name">Cat Store</h2>
      <NavLink id="nav-home" to="/">
        Home
      </NavLink>
      <NavLink id="nav-shop" to="/shop">
        Shop
      </NavLink>
      <NavLink id="nav-checkout" to="/checkout">
        Checkout
      </NavLink>
      <div id="nav-total">
        Total: ${Number.parseFloat(props.priceTotal).toFixed(2)} (
        {props.itemNumber})
      </div>
    </div>
  );
};

export default Nav;
