import React from "react";
import Tree from "../../ChristmasTree/Tree/Tree";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

export default ({ price, toys }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Tree toys={toys} price={price} />
      <Button red>Cancel</Button>
      <Button green>Continue</Button>
    </div>
  );
};
