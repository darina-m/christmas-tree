import React from "react";
import Toy from "./Toy/Toy";
import classes from "./Tree.module.css";

export default ({ price, toys }) => {
  let toysOutput = [];

  Object.keys(toys).forEach((toy) => {
    for (let i = 0; i < toys[toy].quantity; i++) {
      toysOutput.push(<Toy key={toy + i} type={toy} />);
    }
  });

  return (
    <div className={classes.Tree}>
      <div className={classes.imageTree}>
        <div className={classes.treeSet}>{toysOutput}</div>
        <div className={classes.gifts}></div>
      </div>
      <div className={classes.price}>{price} som</div>
    </div>
  );
};
