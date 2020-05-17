import React from "react";
import Tree from "../../ChristmasTree/Tree/Tree";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

export default ({ price, toys,checkoutCancel,checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Tree toys={toys} price={price} />
      <Button click={checkoutCancel} red>
        Cancel
      </Button>
      <Button click={checkoutContinue} green>
        Continue
      </Button>
    </div>
  );
};
