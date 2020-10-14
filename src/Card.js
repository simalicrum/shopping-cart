import React from "react";
import "./Card.css";

const Card = (props) => {
  const handleForm = (e) => {
    e.preventDefault();
    props.handleSubmitForm(e);
  };
  return (
    <div className="card">
      <div className="cat-cont">
        <img className="cat" src={props.picture} alt={props.name} />
      </div>
      {props.name} ${props.price}{" "}
      <form onSubmit={handleForm} id={props.keyprop}>
        <label htmlFor="quantity">Quantity: </label>
        <input type="number" name="quantity" min="1" max="99" />
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default Card;
