import React from "react";
import Card from "./Card";
import "./Shop.css";

const Shop = (props) => {
  return (
    <div id="shop">
      <h3>Buy these cats:</h3>
      <div id="cats-catalog">
        {props.cats.map((i) => {
          return (
            <Card
              name={i.name}
              picture={i.picture}
              price={i.price}
              key={i.key}
              keyprop={i.key}
              handleSubmitForm={props.handleSubmitForm}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
