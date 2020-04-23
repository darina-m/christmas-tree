import React from "react";
import classes from "./Toys.module.css";

export default ({ type }) => {
  const toysClasses = [classes.Toys, classes[type]];

  function area(x) {
    return Math.abs((x[0][0] * (x[1][1] - x[2][2]) +
        x[1][0] * (x[2][1] - x[0][1]) +
        x[2][0] * (x[0][1] - x[1][1])) / 2);
}

  return <div className={toysClasses.join(" ")}></div>;
  
};
