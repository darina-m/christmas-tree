import React from "react";
import classes from "./ToysControl.module.css";
import { useDispatch } from "react-redux";
import { remove, add } from "../../../../store/actions/builder";

export default ({ label, toy, disabled }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.ToysControl}>
      <button
        className={classes.less}
        onClick={() => remove(dispatch, toy)}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{label}</span>
      <button className={classes.more} onClick={() => add(dispatch, toy)}>
        +
      </button>
    </div>
  );
};
