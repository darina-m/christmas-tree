import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";

export default () => {
  const history = useHistory();
  const location = useLocation();

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
    history.push("/checkout/finish");
  }

  return (
    <div className={classes.Checkout}>
      <CheckoutSummary
        toys={toys}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
    </div>
  );
};
