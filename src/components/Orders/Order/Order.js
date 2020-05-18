import React from "react";
import classes from "./Order.module.css";

const CONTROLS = {
  blueBall: "Blue ball",
  orangeBall: "Orange ball",
  pinkBall: "Pink ball",
  yellowBall: "Yellow ball",
  greenBall: "Green ball",
  lightBlueball: "Light-blue ball",
};

export default ({ price, toys, details }) => {
  const toysOutput = Object.keys(toys).map((key) => (
    <span key={key} className={classes.toy}>
      {CONTROLS[key]} ({toys[key]})
    </span>
  ));

  return (
    <div className={classes.Order}>
      <div className={classes.details}>
        {details.name}, {details.phone}, {details.address}
      </div>
      <div className={classes.price}>{price} som</div>
      <div className={classes.toys}>{toysOutput}</div>
    </div>
  );
};