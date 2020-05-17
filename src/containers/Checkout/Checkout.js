import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";

export default () => {
  const history = useHistory();
  const toys = {
    blueBall: 1,
    orangeBall: 1,
    yellowBall: 1,
    pinkBall: 1,
    greenBall: 1,
    lightBlueBall: 1,
  };
  const price = 100;

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
