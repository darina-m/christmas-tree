import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Route } from "react-router-dom";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

export default () => {
  const history = useHistory();
  const location = useLocation();
  const [toys, setToys] = useState({});
  const [price, setPrice] = useState(0);
  
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const newToys = {};
    query.forEach((value, key) => {
      if (key === "price") {
        setPrice (+value);
      } else {
        newToys[key] = +value;
      }
    });
    setToys(newToys);
  }, []);

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
        <CheckoutForm />
      </Route>
    </div>
  );
};
