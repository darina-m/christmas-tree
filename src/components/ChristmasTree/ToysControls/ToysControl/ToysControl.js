import React from "react";
import classes from "./ToysControl.module.css";
import { useDispatch } from "react-redux";
import { ADD_TOY, REMOVE_TOY } from "../../../../store/actions";

export default ({ control, removeToy, addToy, disabled }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.ToysControl}>
      <button
        className={classes.less}
        onClick={() => dispatch({ type: REMOVE_TOY, toy: control.type })}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{control.label}</span>
      <button
        className={classes.more}
        onClick={() => dispatch({ type: ADD_TOY, toy: control.type })}
      >
        +
      </button>
    </div>
  );
};
