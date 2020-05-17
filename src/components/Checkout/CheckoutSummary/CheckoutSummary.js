import React from "react";
import { Route } from "react-router-dom";
import Tree from "../../ChristmasTree/Tree/Tree";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

export default ({ price, toys,checkoutCancel,checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Tree toys={toys} price={price} />
      <Route path="/checkout" exact>
        <Button click={checkoutCancel} red>
          Cancel
        </Button>
        <Button click={checkoutContinue} green>
          Continue
        </Button>
      </Route>
    </div>
  );
};
