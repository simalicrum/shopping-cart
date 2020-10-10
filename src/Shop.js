import React, { useState } from "react";
import Card from "./Card";

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
  return (
    <div>
      <div>Buy these cats:</div>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Shop;
