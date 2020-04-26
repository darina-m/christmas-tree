import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./OrderSummary.module.css";

const LABELS = {
  pinkBall: "Pink ball",
  orangeBall: "Orange ball",
  greenBall: "Green ball",
  lightBlueBall: "Light-blue ball",
  blueBall: "Blue ball",
  yellowBall: "Yellow ball",
};

export default ({ toys, cancelOrder, finishOrder, price }) => {
  const toysOutput = Object.keys(toys)
    .filter((toy) => toys[toy] > 0)
    .map((toy) => (
      <li>
        {LABELS[toy]}: {toys[toy]}
      </li>
    ));

  return (
    <div className={classes.OrderSummary}>
      <h2>Your order</h2>
      <p>Congratulations! You've built a best christmas tree of all time!</p>
      <ul>{toysOutput}</ul>
      <h3>Total price:{price} som</h3>
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
