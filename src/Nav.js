import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div>Cat Store</div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/checkout">Checkout</NavLink>
    </div>
  );
};

export default Nav;
