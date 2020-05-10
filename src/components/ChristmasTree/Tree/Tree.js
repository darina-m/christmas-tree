import React from "react";
import Toy from "./Toy/Toy";
import classes from "./Tree.module.css";

export default ({ price, toys }) => {
  let toysOutput = [];

  Object.keys(toys).forEach((type) => {
    for (let i = 0; i < toys[type]; i++) {
      toysOutput.push(<Toy key={type + i} type={type} />);
    }
  });


  return (
    <div className={classes.Tree}>
      <div className={classes.image}>
        <div className={classes.tree}>{toysOutput}</div>
      </div>
      <div className={classes.price}>{price} som</div>
    </div>
  );
};
