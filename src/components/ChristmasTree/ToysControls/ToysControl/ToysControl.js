import React from "react";
import classes from "./ToysControl.module.css";

export default ({ control, removeToy, addToy, disabled}) => {
  return (
    <div className={classes.ToysControl}>
      <button
        className={classes.less}
        onClick={() => removeToy(control.type)}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{control.label}</span>
      <button className={classes.more} onClick={() => addToy(control.type) }>
        +
      </button>
    </div>
  );
};
