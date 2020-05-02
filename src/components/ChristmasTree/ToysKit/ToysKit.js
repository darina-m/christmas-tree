import React from "react";
import Toys from "./Toys/Toys";
import classes from "./ToysKit.module.css";

export default ({ price, toys}) => {
  let toysOutput = [];
  

  Object.keys(toys).forEach((type) => {
    for (let i = 0; i < toys[type]; i++) {
      toysOutput.push(<Toys key={type + i} type={type} />);
    }
  });

  toysOutput.sort((a, b) => (Math.random() < 0.5 ? 1 : -1));

  return (
    <div className={classes.ToysKit}>
      <div className={classes.bento} >
        <div className={classes.treeBento} >{toysOutput}</div>
      </div>
      <div className={classes.price}>{price} som</div>
    </div>
  );
};
