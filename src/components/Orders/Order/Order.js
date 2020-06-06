import React from "react";
import classes from "./Order.module.css";

const CONTROLS = {
  blueBall: "Blue ball",
  orangeBall: "Orange ball",
  pinkBall: "Pink ball",
  yellowBall: "Yellow ball",
  greenBall: "Green ball",
  lightBlueBall: "Light-blue ball",
};

export default ({ price, toys, details }) => {
  let toysOutput = null;
  if (toys) {
    toysOutput = Object.keys(toys).map((key) => (
      <span key={key} className={classes.toy}>
        {CONTROLS[key]} ({toys[key]})
      </span>
    ));
  }
  const detailsOutput = (
    <div className={classes.details}>
      {details
        ? details.name + ", " + details.phone + ", " + details.address
        : "No details available"}
    </div>
  );
  return (
    <div className={classes.Order}>
      {detailsOutput}
      <div className={classes.price}>{price} som</div>
      <div className={classes.toys}>{toysOutput}</div>
    </div>
  );
};
