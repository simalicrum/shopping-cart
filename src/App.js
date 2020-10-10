import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Shop from ",.Shop";

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
