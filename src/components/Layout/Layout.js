import React from "react";
import Toolbar from "./Toolbar/Toolbar.js";
import Drawer from "./Drawer/Drawer.js";
import classes from "./Layout.module.css";

export default ({ children }) => (
  <div className={classes.Layout}>
    <Toolbar />
    <Drawer />
    {children}
  </div>
);
