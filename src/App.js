import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { restore } from "./store/actions/auth";
import Auth from "./components/Auth/Auth";
import Layout from "./containers/Layout/Layout.js";
import ChristmasTree from "./containers/ChristmasTree/ChristmasTree";
import Checkout from "./components/Checkout/Checkout";
import { Route, Switch, Redirect } from "react-router-dom";
import Orders from "./containers/Orders/Orders";
import Logout from "./components/Logout/Logout";

export default () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  useEffect(() => {
    restore(dispatch);
  }, [dispatch]);

  let routesOutput = (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/builder" />
      </Route>
      <Route path="/builder">
        <ChristmasTree />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
  if (isAuthenticated) {
    routesOutput = (
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
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
    );
  }
  return (
    <div className="App">
      <Layout>{routesOutput}</Layout>
    </div>
  );
};
