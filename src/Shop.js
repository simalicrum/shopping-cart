import React, { useState } from "react";
import Card from "./Card";
import "./Shop.css";

const Shop = () => {
  const [cats, setCats] = useState([
    { name: "Ann", picture: "Ann.jpg", price: 99.99 },
    { name: "Daisy", picture: "Daisy.jpg", price: 99.99 },
    { name: "Juniper", picture: "Juniper.jpg", price: 99.99 },
    { name: "Koshenya", picture: "Koshenya.jpg", price: 99.99 },
    { name: "Pebbles", picture: "Pebbles.jpg", price: 99.99 },
    { name: "Punkle", picture: "Punkle.JPG", price: 99.99 },
    { name: "Storm", picture: "Storm.jpg", price: 99.99 },
    { name: "Supurr", picture: "Supurr.jpg", price: 99.99 },
    { name: "Yang", picture: "Yang.jpg", price: 99.99 },
    { name: "Yin", picture: "Yin.jpg", price: 99.99 },
  ]);
  const [cart, setCart] = useState([]);
  const [itemNumber, setItemNumber] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);
  return (
    <div id="shop">
      <div>Buy these cats:</div>
      <div id="cats-catalog">
        {cats.map((i) => {
          return <Card name={i.name} picture={i.picture} price={i.price} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
