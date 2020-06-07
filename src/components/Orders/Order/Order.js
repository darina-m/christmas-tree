import React from "react";
import classes from "./Order.module.css";

export default ({ price, toys, details }) => {
  let toysOutput = null;
  if (toys) {
    toysOutput = Object.keys(toys).map((toy) => (
      <span key={toy} className={classes.toy}>
        {toys[toy].label} ({toys[toy].quantity})
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
