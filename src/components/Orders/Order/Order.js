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

export default ({ price, toys, customer }) => {
  const toysOutput = Object.keys(toys).map((key) => (
    <span key={key} className={classes.toy}>
      {CONTROLS[key]} ({toys[key]})
    </span>
  ));
  const customerOutput = (
    <div className={classes.customer}>
      {customer
        ? customer.name + ", " + customer.phone + ", " + customer.address
        : "No customer available"}
    </div>
  );
  return (
    <div className={classes.Order}>
     {customerOutput}
      <div className={classes.price}>{price} som</div>
      <div className={classes.toys}>{toysOutput}</div>
    </div>
  );
    
};