import React from "react";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Layout from "./containers/Layout/Layout.js";
import ChristmasTree from "./containers/ChristmasTree/ChristmasTree";
import Checkout from "./components/Checkout/Checkout";
import { Route, Switch, Redirect } from "react-router-dom";
import Orders from "./containers/Orders/Orders";

export default () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/builder" />
          </Route>
          <Route path="/builder">
            <ChristmasTree />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>{" "}
          <Route path="/auth">
            <Auth />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};
