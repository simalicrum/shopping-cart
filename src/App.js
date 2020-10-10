import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Shop from "./Shop";
import Checkout from "./Checkout";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
