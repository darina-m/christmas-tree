import React from "react";
import ToysControl from "./ToysControl/ToysControl";
import Button from "../../UI/Button/Button";
import classes from "./ToysControls.module.css";

const CONTROLS = [
  { label: "Pink ball", type: "pinkBall" },
  { label: "Orange ball", type: "orangeBall" },
  { label: "Green ball", type: "greenBall" },
  { label: "Light-blue ball", type: "lightBlueBall" },
  { label: "Blue ball", type: "blueBall" },
  { label: "Yellow ball", type: "yellowBall" },
];

export default ({ canOrder, toys, startOrder }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <ToysControl
      key={control.type}
      control={control}
      disabled={toys[control.type] === 0}
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
