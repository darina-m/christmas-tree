import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./OrderSummary.module.css";

export default ({ toys, cancelOrder, finishOrder, price }) => {
  const toysOutput = Object.keys(toys)
    .filter((toy) => toys[toy].quantity > 0)
    .map((toy) => (
      <li key={toys}>
        {toys[toy].label}: {toys[toy].quantity}
      </li>
    ));

  return (
    <div className={classes.OrderSummary}>
      <h2>Your order</h2>
      <p>Congratulations! You've built a best christmas tree of all time!</p>
      <ul>{toysOutput}</ul>
      <h2>Total price:{price} som</h2>
      <p>Would you like to checkout?</p>
      <Button click={finishOrder} green>
        Checkout
      </Button>
      <Button click={cancelOrder} red>
        Cancel
      </Button>
    </div>
  );
};
