import React from "react";
import classes from "./Order.module.css";

export default ({ price, toys, details }) => {
  const toysOutput = Object.keys(toys)
    .filter(toy => toys[toy].quantity > 0)
    .map(toy => (
      <span key={toy} className={classes.toy}>
        {toys[toy].label} ({toys[toy].quantity})
      </span>
    ));
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
