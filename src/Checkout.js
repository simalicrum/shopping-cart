import React from "react";
import "./Checkout.css";

const Checkout = (props) => {
  return (
    <div id="checkout">
      <h3 id="cart-title">Shopping Cart:</h3>
      <div className="cartrow">
        <b className="cartcolumn">Item</b>
        <b className="cartcolumn"> Price</b>
        <b className="cartcolumn">Quantity</b>
        <b className="cartcolumn">Subtotal</b>
      </div>
      {props.cart.map((i) => (
        <div className="cartrow">
          <div className="cartcolumn">{i.name}</div>{" "}
          <div className="cartcolumn">${i.price}</div>{" "}
          <div className="cartcolumn">{i.quantity}</div>{" "}
          <div className="cartcolumn">
            ${Number.parseFloat(i.quantity * i.price).toFixed(2)}
          </div>
        </div>
      ))}
      <div className="cartrow">
        <b className="cartcolumn"></b>
        <b className="cartcolumn"></b>
        <b className="cartcolumn">Total:</b>
        <b className="cartcolumn">
          $
          {Number.parseFloat(
            props.cart.reduce(
              (acc, value) => acc + value.price * value.quantity,
              0
            )
          ).toFixed(2)}
        </b>
      </div>
    </div>
  );
};

export default Checkout;
