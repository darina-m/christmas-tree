import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

export default ({ children, show, hideCallback }) => {
  const modalClasses = [classes.Modal];
  if (show) {
    modalClasses.push(classes.show);
  }

  return (
    <>
      <Backdrop show={show} hideCallback={hideCallback} />
      <div className={modalClasses.join(" ")}>{children}</div>
    </>
  );
};
