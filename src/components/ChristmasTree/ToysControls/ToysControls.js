import React from "react";
import ToysControl from "./ToysControl/ToysControl";
import Button from "../../UI/Button/Button";
import classes from "./ToysControls.module.css";

export default ({ canOrder, toys, startOrder }) => {
  const controlsOutput = Object.keys(toys).map((toy) => (
    <ToysControl
      key={toy}
      toy={toy}
      label={toys[toy].label}
      disabled={toys[toy].quantity === 0}
    />
  ));

  return (
    <div className={classes.ToysControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
