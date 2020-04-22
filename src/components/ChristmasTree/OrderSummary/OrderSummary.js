import React from "react";
import classes from "./OrderSummary.module.css";

const LABELS = {
  pinkBall: "Pink ball",
  orangeBall: "Orange ball",
  greenBall: "Green ball",
  lightBlueBall: "Light-blue ball",
  blueBall: "Blue ball",
  yellowBall: "Yellow ball",
};

export default ({ toys }) => {
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
      <p>Would you like to checkout?</p>
    </div>
  );
};