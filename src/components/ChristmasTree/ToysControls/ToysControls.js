import React from "react";
import ToysControl from "./ToysControl/ToysControl";
import classes from "./ToysControls.module.css";

const CONTROLS = [
  { label: "Pink ball", type: "pinkBall" },
  { label: "Orange ball", type: "orangeBall" },
  { label: "Green ball", type: "greenBall" },
  { label: "Light-blue ball", type: "lightBlueBall" },
  { label: "Blue ball", type: "blueBall" },
  { label: "Yellow ball", type: "yellowBall" },
];

export default ({ canOrder, toys, addToy, removeToy, startOrder }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <ToysControl
      key={control.type}
      control={control}
      addToy={addToy}
      removeToy={removeToy}
      disabled={toys[control.type] === 0}
    />
  ));

  return (
    <div className={classes.ToysControls}>
      {controlsOutput}
      <button
        onClick={startOrder}
        disabled={!canOrder}
        className={classes.orderButton}
      >
        ORDER
      </button>
    </div>
  );
};
