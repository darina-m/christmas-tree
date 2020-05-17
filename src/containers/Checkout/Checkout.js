import React from "react";
import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";

export default () => {
  const toys = {
    blueBall: 1,
    orangeBall: 1,
    yellowBall: 1,
    pinkBall: 1,
    greenBall: 1,
    lightBlueBall: 1,
  };
  const price = 100;

  return (
    <div className={classes.Checkout}>
      <CheckoutSummary toys={toys} price={price} />
    </div>
  );
};
