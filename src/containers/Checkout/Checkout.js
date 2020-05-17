import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Route } from "react-router-dom";
import axios from "../../axios";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

export default () => {
  const history = useHistory();
  const location = useLocation();
  const [toys, setToys] = useState({})
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const query = new URLSearchParams(location.search);
  let price = 0;
  let toys = {};
  query.forEach((value, key) => {
    if (key === "price") {
      price = +value;
    } else {
      toys[key] = +value;
    }
  });

  function checkoutCancel() {
    history.push("/builder");
  }

  function checkoutContinue() {
    history.push("/checkout/form");
  }

  return (
    <div className={classes.Checkout}>
      <CheckoutSummary
        toys={toys}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
      <Route path="/checkout/form">
        <CheckoutForm/>
      </Route>
    </div>
  );
};
