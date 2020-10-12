import React from "react";
import "./Card.css";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="cat-cont">
        <img className="cat" src={props.picture} alt={props.name} />
      </div>
      {props.name} ${props.price}{" "}
      <form>
        <label for="quantity">Quantity: </label>
        <input type="number" name="quantity" min="1" max="99" />
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default Card;
