import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import uniqid from "uniqid";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Shop from "./Shop";
import Checkout from "./Checkout";

const App = () => {
  const [cats] = useState([
    { name: "Ann", picture: "Ann.jpg", price: 99.99, key: uniqid() },
    { name: "Daisy", picture: "Daisy.jpg", price: 99.99, key: uniqid() },
    { name: "Juniper", picture: "Juniper.jpg", price: 99.99, key: uniqid() },
    { name: "Koshenya", picture: "Koshenya.jpg", price: 99.99, key: uniqid() },
    { name: "Pebbles", picture: "Pebbles.jpg", price: 99.99, key: uniqid() },
    { name: "Punkle", picture: "Punkle.JPG", price: 99.99, key: uniqid() },
    { name: "Storm", picture: "Storm.jpg", price: 99.99, key: uniqid() },
    { name: "Supurr", picture: "Supurr.jpg", price: 99.99, key: uniqid() },
    { name: "Yang", picture: "Yang.jpg", price: 99.99, key: uniqid() },
    { name: "Yin", picture: "Yin.jpg", price: 99.99, key: uniqid() },
  ]);
  const [cart, setCart] = useState([]);
  const [itemNumber, setItemNumber] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const catToAdd = cats.filter((j) => j.key === e.target.id);
    setCart(
      cart
        .map((i) => {
          return {
            name: i.name,
            picture: i.picture,
            price: i.price,
            key: i.key,

            quantity: i.quantity,
          };
        })
        .concat({
          name: catToAdd[0].name,
          picture: catToAdd[0].picture,
          price: catToAdd[0].price,
          key: catToAdd[0].key,
          quantity: e.target.quantity.value,
        })
    );
    setPriceTotal(priceTotal + catToAdd[0].price * e.target.quantity.value);
    setItemNumber(itemNumber + parseInt(e.target.quantity.value));
    e.target.reset();
  };
  return (
    <div>
      <Router>
        <Nav itemNumber={itemNumber} priceTotal={priceTotal} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/shop"
            render={() => (
              <Shop cats={cats} handleSubmitForm={handleSubmitForm} />
            )}
          />
          <Route
            exact
            path="/checkout"
            render={() => <Checkout cart={cart} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
